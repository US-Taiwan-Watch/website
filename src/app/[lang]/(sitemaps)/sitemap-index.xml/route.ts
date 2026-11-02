import { generateSitemapIndexLink } from '@/common/utils/sitemap.utils'
import { config } from '@/config'

/**
 * Sitemap Index Paths
 */
const PATHS = [
  '/',
  '/about/',
  '/article/',
  '/bill/',
  '/ketagalan/',
  '/people/',
  '/podcast/',
]

/**
 * Generate sitemap index XML
 * @returns The sitemap index XML
 *
 * @see {@link https://github.com/vercel/next.js/discussions/61025#discussioncomment-8448274}
 */
export function GET() {
  const baseURL = config.WEB_BASE_URL

  const sitemapIndexXML = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${PATHS.map((path) => generateSitemapIndexLink(new URL(`${path}sitemap.xml`, baseURL).toString()))} 
    </sitemapindex>`

  return new Response(sitemapIndexXML, {
    headers: { 'Content-Type': 'text/xml' },
  })
}
