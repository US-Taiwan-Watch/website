# Production releases after the Payload 3 cutover

The November 1, 2026 release runs Payload 3.92.1 and MongoDB 9.0.4. All three website domains (`ustw.watch`, `www.ustw.watch`, `dev.ustw.watch`) share frontend app `ustw-cms-frontend-dev`; there is one current backend app and no staging slot. The existing GitHub environment named **Development** contains the old release credentials; its name does not imply a separate site.

## Source and image builds

- Website source lives at this repository root. Keep the approved Auth0 origin/login repair and `deployment/start-production.mjs` connection workaround.
- CMS source lives in [US-Taiwan-Watch/backend](https://github.com/US-Taiwan-Watch/backend), under `payload3/`. The older root backend is historical and is not deployed.
- Pull requests run source checks only, without deployment credentials. No push automatically releases a container or changes Azure.
- After both source PRs are reviewed/merged, manually run **Release images**. Select frontend, backend or both. Backend/both requires the exact reviewed 40-character backend commit. The workflow builds Linux AMD64 images, publishes unique source/run tags to the existing `ustwcmsfrontenddev.azurecr.io` registry, and records registry digests in the run summary and `release-images.json` artifact. It does not deploy.
- Frontend build needs the existing read-only public Algolia search key and server-only SoundOn token. The token is mounted through a BuildKit secret, redacted from build logs, scanned out of generated artifacts, and removed from the runner. Auth0 client/session secrets and all database/storage/search-write credentials are runtime-only Azure settings, never build arguments or image layers.
- The source-check workflow uses the project's supported Yarn/Node20 compiler. Production build/runtime uses the same accepted Node22.23.4 image; dependency locks are unchanged.

## Deploying reviewed images

Manually run **Deploy reviewed images** from a reviewed branch. Supply each selected new registry digest and the currently deployed digest for rollback, and type `DEPLOY USTW PRODUCTION`. Digest inputs accept only `sha256:` plus 64 lowercase hex characters; registry/repository/app names are fixed in code. Every selected app credential and rollback input is checked before either app changes.

The workflow changes app images only. It leaves Azure runtime settings, database, TLS/firewall, storage containers, Auth0 settings, access restrictions and disabled bill/newsletter jobs untouched. Backend is deployed and checked first, then frontend. A failure restores previous selected image(s) and checks public health. A successful HTTP response is a smoke check, not proof that every editorial feature works; review the release and perform the relevant acceptance before declaring a future release successful.

The existing `Development` environment must contain:

| Binding | Use |
| --- | --- |
| `ACR_USERNAME`, `ACR_PASSWORD` | Existing registry image push |
| `NEXT_PUBLIC_ALGOLIA_SEARCH_KEY` | Existing public read-only production search key |
| `SOUNDON_API_TOKEN` | Server-only provider build read; compatibility fallback reads the old `NEXT_PUBLIC_SOUNDON_API_TOKEN` secret name without making it public |
| `NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID` | Existing public analytics identifier (optional) |
| `AZURE_WEBAPP_PUBLISH_PROFILE` | Existing shared frontend deployment profile |
| `AZURE_WEBAPP_PUBLISH_PROFILE_BACKEND` | Backend deployment profile: **must be provisioned/verified before a backend/both deployment can run** |

No new credential, permission grant or GitHub environment is created by these source changes. The backend profile binding has not been verified; missing binding fails before deployment. Do not copy a frontend profile into it. Existing publish profiles can be replaced later with scoped Azure federation through a separately reviewed access change.

## Rollback boundaries

Image rollback is intended for subsequent releases on the current Payload 3 database schema. It cannot roll back database migrations and must never point the legacy Payload 2 backend at MongoDB 9 migrated data. Any future schema migration needs its own backup/recovery procedure.

The original MongoDB server, old images/settings and fresh cutover backup remain protected outside these repositories. Cutover release digests are:

- Backend: `sha256:b47bea2f5884629c00af1b9f09463bbf5efb103147cdf0cf99308e8bf4410308`.
- Frontend, including connection bootstrap: `sha256:5bc07a33109a1e58958dd643de2be462a6efc949f76918421b0a236675475277`.

Bill/legislator auto-updates and newsletters stay disabled. New member photo uploads use private `ustw-taiwan-records-private-v3`; original media links are preserved. No source PR or workflow activation authorizes a database change or new paid service.

The retired workflow file now contains a harmless manual notice; it is also disabled in GitHub. Do not restore its push trigger or old `.env`-copying Docker release path.
