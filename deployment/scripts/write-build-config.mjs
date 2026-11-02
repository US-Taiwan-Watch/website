import fs from 'node:fs'
const destination = process.argv[2]
if (!destination) throw Error('Build configuration output path required')
const config = {
  NEXT_PUBLIC_WEB_BASE_URL: 'https://www.ustw.watch',
  NEXT_PUBLIC_API_BASE_URL: 'https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net/api',
  NEXT_PUBLIC_GRAPHQL_API_URL: 'https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net/api/graphql',
  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || '',
  NEXT_PUBLIC_ALGOLIA_APP_ID: '3DWAKUFOR9',
  NEXT_PUBLIC_ALGOLIA_SEARCH_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY,
  NEXT_PUBLIC_ALGOLIA_INDEX_NAME: 'ustw-website',
  NEXT_PUBLIC_SOUNDON_PODCAST_ID: '6cdfccc6-7c47-4c35-8352-7f634b1b6f71',
  SOUNDON_API_TOKEN: process.env.SOUNDON_API_TOKEN,
}
if (!config.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY || !config.SOUNDON_API_TOKEN) throw Error('Missing build search/provider configuration')
fs.writeFileSync(destination, JSON.stringify(config), { mode: 0o600, flag: 'wx' })
