import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { deploymentPlan } from './release-plan.mjs'

export function assertCurrentImage(current, target, rollback = false) {
  const allowed = rollback ? [target.image, target.previous] : [target.previous]
  if (!allowed.includes(current.replace(/^DOCKER\|/, ''))) {
    throw Error('Current Azure image differs from the recorded release; refresh rollback inputs before retrying')
  }
}

export function run(mode, component, env = process.env) {
  const plan = deploymentPlan(JSON.parse(env.RELEASE_INPUTS || '{}'))
  const subscription = env.AZURE_SUBSCRIPTION_ID || ''
  if (!/^[a-f0-9-]{36}$/i.test(subscription)) throw Error('Invalid Azure subscription')
  const az = (args) => {
    try { return execFileSync('az', [...args, '--only-show-errors'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 120000 }).trim() }
    catch { throw Error(`Azure ${mode} request failed; no credential values logged`) }
  }
  const base = (name) => `https://management.azure.com/subscriptions/${subscription}/resourceGroups/ustw-cms-rg/providers/Microsoft.Web/sites/${name === 'backend' ? 'ustw-cms-backend' : 'ustw-cms-frontend-dev'}`
  const config = (name) => `${base(name)}/config/web?api-version=2024-04-01`
  const current = (name) => az(['rest', '--method', 'get', '--url', config(name), '--query', 'properties.linuxFxVersion', '-o', 'tsv'])
  if (mode === 'preflight') {
    // Check every selected rollback anchor before changing either app.
    for (const [name, target] of Object.entries(plan)) assertCurrentImage(current(name), target)
    console.log('All selected Azure images match the recorded rollback anchors')
    return
  }
  if (!['deploy', 'rollback'].includes(mode) || !plan[component]) throw Error('Unknown deployment operation')
  const target = plan[component]
  assertCurrentImage(current(component), target, mode === 'rollback')
  const image = `DOCKER|${mode === 'rollback' ? target.previous : target.image}`
  az(['rest', '--method', 'patch', '--url', config(component), '--body', JSON.stringify({ properties: { linuxFxVersion: image } }), '-o', 'none'])
  az(['rest', '--method', 'post', '--url', `${base(component)}/restart?api-version=2024-04-01`, '-o', 'none'])
  if (current(component) !== image) throw Error('Azure image readback did not match the selected version')
  console.log(`${component} ${mode}: exact image verified`)
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) run(process.argv[2], process.argv[3])
