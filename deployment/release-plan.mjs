import fs from 'node:fs'
import { pathToFileURL } from 'node:url'
export const registry = 'ustwcmsfrontenddev.azurecr.io'
const digestPattern = /^sha256:[a-f0-9]{64}$/
export function deploymentPlan(input) {
  if (input.confirmation !== 'DEPLOY USTW PRODUCTION') throw Error('Explicit production confirmation required')
  const plan = {}
  for (const [component, repository] of [['backend', 'ustw-cms-backend'], ['frontend', 'ustw-cms-frontend-dev']]) {
    const digest = input[`${component}_digest`] || ''
    const previous = input[`${component}_previous_digest`] || ''
    if (!digest && !previous) continue
    if (!digestPattern.test(digest) || !digestPattern.test(previous)) throw Error(`Both immutable ${component} digests required`)
    plan[component] = { image: `${registry}/${repository}@${digest}`, previous: `${registry}/${repository}@${previous}` }
  }
  if (!Object.keys(plan).length) throw Error('Select at least one image')
  return plan
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const input = JSON.parse(process.env.RELEASE_INPUTS || '{}')
  const plan = deploymentPlan(input)
  // Validate every selected credential before either app is changed.
  for (const component of Object.keys(plan)) if (!process.env[`${component.toUpperCase()}_PUBLISH_PROFILE`]) throw Error(`Missing ${component} publish profile; no deployment attempted`)
  for (const component of ['backend', 'frontend']) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `${component}=${Boolean(plan[component])}\n`)
    for (const field of ['image', 'previous']) if (plan[component]) fs.appendFileSync(process.env.GITHUB_OUTPUT, `${component}_${field}=${plan[component][field]}\n`)
  }
}
