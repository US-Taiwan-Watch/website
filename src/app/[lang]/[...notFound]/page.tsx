import { notFound } from 'next/navigation'

/**
 * 捕捉所有未定義的路由，並返回 404 頁面
 * @see {@link https://github.com/vercel/next.js/discussions/50518#discussioncomment-7427548}
 */
export default function CatchAllNotFound() {
  return notFound()
}
