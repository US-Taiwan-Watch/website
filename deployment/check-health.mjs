const component = process.argv[2]
const targets = {
  backend: ['https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net/api/health'],
  frontend: ['https://www.ustw.watch/en-US', 'https://www.ustw.watch/zh-TW'],
}
if (!targets[component]) throw Error('Unknown health target')
let lastError
const deadline = Date.now() + 180000
while (Date.now() < deadline) {
  try {
    for (const url of targets[component]) {
      const remaining = deadline - Date.now()
      if (remaining <= 0) throw Error('Health deadline exceeded')
      const response = await fetch(url, { signal: AbortSignal.timeout(Math.min(10000, remaining)), cache: 'no-store' })
      if (!response.ok) throw Error(`${component} HTTP ${response.status}`)
      if (component === 'backend') {
        const body = await response.json()
        if (body.status !== 'ok' || body.automaticUpdates !== false || body.newsletters !== false) throw Error('Backend health or disabled-job state differs')
      } else if (!(await response.text()).includes('USTW')) throw Error('Website content missing')
    }
    console.log(`${component} public health passed`)
    process.exit(0)
  } catch (error) { lastError = error }
  await new Promise(resolve => setTimeout(resolve, Math.min(5000, Math.max(0, deadline - Date.now()))))
}
throw Error(`${component} did not become healthy: ${lastError?.message}`)
