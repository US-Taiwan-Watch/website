import test from 'node:test'
import assert from 'node:assert/strict'
import { deploymentPlan } from './release-plan.mjs'
import { assertCurrentImage } from './azure-images.mjs'
const digest = `sha256:${'a'.repeat(64)}`
const previous = `sha256:${'b'.repeat(64)}`
const base = { confirmation: 'DEPLOY USTW PRODUCTION', frontend_digest: digest, frontend_previous_digest: previous }
test('production selection pins images and rollback to the fixed app repositories', () => {
  const p = deploymentPlan({ ...base, backend_digest: digest, backend_previous_digest: previous })
  assert.equal(p.frontend.image, `ustwcmsfrontenddev.azurecr.io/ustw-cms-frontend-dev@${digest}`)
  assert.equal(p.backend.previous, `ustwcmsfrontenddev.azurecr.io/ustw-cms-backend@${previous}`)
})
test('rollback verification must switch to a different real version', () => {
  assert.throws(() => deploymentPlan({ ...base, verify_rollback: true, frontend_previous_digest: digest }))
  assert.doesNotThrow(() => deploymentPlan({ ...base, verify_rollback: true }))
})
test('stale rollback anchors cannot overwrite an intervening production release', () => {
  const target = deploymentPlan(base).frontend
  assert.doesNotThrow(() => assertCurrentImage(`DOCKER|${target.previous}`, target))
  assert.throws(() => assertCurrentImage(`DOCKER|${target.image}`, target))
  assert.doesNotThrow(() => assertCurrentImage(`DOCKER|${target.image}`, target, true))
  assert.doesNotThrow(() => assertCurrentImage(`DOCKER|${target.previous}`, target, true))
  assert.throws(() => assertCurrentImage(`DOCKER|other.example/app@${digest}`, target, true))
})
test('no production action without explicit confirmation and a selected image', () => {
  for (const i of [{}, { ...base, confirmation: '' }, { confirmation: base.confirmation }]) assert.throws(() => deploymentPlan(i))
})
test('reject tags, foreign repositories, shell text and incomplete rollback before deployment', () => {
  for (const value of ['latest', `other.example/app@${digest}`, `${digest}\nbackend=true`, '$(id)', '', 'sha256:123']) {
    assert.throws(() => deploymentPlan({ ...base, frontend_digest: value }))
    assert.throws(() => deploymentPlan({ ...base, frontend_previous_digest: value }))
  }
  assert.throws(() => deploymentPlan({ ...base, backend_digest: digest }))
})
