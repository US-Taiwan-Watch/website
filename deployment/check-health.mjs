const component = process.argv[2]
const targets = {
  backend: ['https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net/api/health'],
  frontend: ['https://www.ustw.watch/en-US', 'https://www.ustw.watch/zh-TW'],
}
if (!targets[component]) throw Error('Unknown health target')
let lastError
for (let attempt = 0; attempt < 18; attempt++) {
  try {
    for (const url of targets[component]) {
      const response = await fetch(url, { signal: AbortSignal.timeout(20000), cache: 'no-store' })
      if (!response.ok) throw Error(`${component} HTTP ${response.status}`)
      if (component === 'backend') {
        const body = await response.json()
        if (body.status !== 'ok' || body.automaticUpdates !== false || body.newsletters !== false) throw Error('Backend health or disabled-job state differs')
      } else if (!(await response.text()).includes('USTW')) throw Error('Website content missing')
    }
    console.log(`${component} public health passed`)
    process.exit(0)
  } catch (error) { lastError = error }
  await new Promise(resolve => setTimeout(resolve, 10000))
}
throw Error(`${component} did not become healthy: ${lastError?.message}`)
