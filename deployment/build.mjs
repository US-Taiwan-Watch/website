import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
const config=JSON.parse(fs.readFileSync('/run/secrets/website-build.json','utf8'));
const allowed=['NEXT_PUBLIC_WEB_BASE_URL','NEXT_PUBLIC_API_BASE_URL','NEXT_PUBLIC_GRAPHQL_API_URL','NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID','NEXT_PUBLIC_ALGOLIA_APP_ID','NEXT_PUBLIC_ALGOLIA_SEARCH_KEY','NEXT_PUBLIC_ALGOLIA_INDEX_NAME','NEXT_PUBLIC_SOUNDON_PODCAST_ID','SOUNDON_API_TOKEN'];
if(Object.keys(config).some(name=>!allowed.includes(name)))throw Error('Unexpected frontend build configuration');
if(config.NEXT_PUBLIC_WEB_BASE_URL!=='https://www.ustw.watch'||config.NEXT_PUBLIC_API_BASE_URL!=='https://ustw-cms-backend-hbd9avfxadfneybh.westus2-01.azurewebsites.net/api'||config.NEXT_PUBLIC_GRAPHQL_API_URL!==config.NEXT_PUBLIC_API_BASE_URL+'/graphql'||config.NEXT_PUBLIC_ALGOLIA_APP_ID!=='3DWAKUFOR9'||config.NEXT_PUBLIC_ALGOLIA_INDEX_NAME!=='ustw-website'||!config.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY||!config.SOUNDON_API_TOKEN)throw Error('Incomplete production frontend build configuration');
const env={...process.env,...config,NODE_OPTIONS:'--max-old-space-size=3072',NEXT_TELEMETRY_DISABLED:'1',HUSKY:'0',AUTH0_DOMAIN:'us-taiwan-watch.us.auth0.com',AUTH0_CLIENT_ID:'O3vW6Bh14A7OuGDdI5qK38l3kn9Vr1LT',AUTH0_CLIENT_SECRET:'non-secret-build-placeholder',AUTH0_SECRET:'0'.repeat(64)};
for(const args of [['install','--frozen-lockfile'],['i18n'],['lint'],['check-types'],['build']]){
  console.log(JSON.stringify({phase:'frontend-production-'+args[0],startedAt:new Date().toISOString()}));
  const r=spawnSync('yarn',args,{env,encoding:'utf8',maxBuffer:24*1024*1024});
  let log=(r.stdout||'')+(r.stderr||'');
  for(const value of [config.SOUNDON_API_TOKEN,config.NEXT_PUBLIC_ALGOLIA_SEARCH_KEY])log=log.split(value).join('[REDACTED]');
  console.log(log);
  if(r.status!==0)process.exit(r.status||1);
}
let files=0,leaks=0;
function scan(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=dir+'/'+e.name;if(e.isDirectory())scan(p);else if(e.isFile()){files++;if(fs.readFileSync(p).includes(Buffer.from(config.SOUNDON_API_TOKEN)))leaks++;}}}
scan('/app/.next/standalone');scan('/app/.next/static');
if(leaks)throw Error('Private provider credential entered generated frontend artifacts');
console.log(JSON.stringify({phase:'frontend-production-build-complete',filesScanned:files,privateCredentialMatches:leaks}));
