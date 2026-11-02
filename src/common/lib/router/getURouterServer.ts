import resolveRouteUrlHelper, {
  concatPathAndQuery,
} from '@/common/lib/router/helper'

/**
 * 可用於 server component 的 router 操作
 */
export default function getURouterServer() {
  return { resolveRouteUrl: resolveRouteUrlHelper, concatPathAndQuery }
}
