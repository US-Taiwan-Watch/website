import { config } from '@/config'
import { MetadataRoute } from 'next'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'

export const generateSitemapIndexLink = (url: string) =>
  `<sitemap><loc>${url}</loc></sitemap>`

/**
 * Generate a page link for sitemap
 * @param path - The path of the page, starts with `/`
 * @returns The page link
 *
 * @example
 * generatePageLink("/")
 * // {
 * //   url: "https://acme.com",
 * //   lastModified: new Date(),
 * //   changeFrequency: "monthly",
 * //   priority: 1,
 * //   alternates: {
 * //     languages: {
 * //       en: "https://acme.com/en",
 * //       zh: "https://acme.com/zh",
 * //     },
 * //   },
 * // }
 *
 * generatePageLink("/about")
 * // {
 * //   url: "https://acme.com/about",
 * //   lastModified: new Date(),
 * //   changeFrequency: "monthly",
 * //   priority: 1,
 * //   alternates: {
 * //     languages: {
 * //       en: "https://acme.com/en/about",
 * //       zh: "https://acme.com/zh/about",
 * //     },
 * //   },
 * // }
 */
export const generatePageLinks = (path: string): MetadataRoute.Sitemap => {
  const baseURL = config.WEB_BASE_URL
  const pathWithoutFirstSlash = path.startsWith('/') ? path.slice(1) : path

  return I18N_SUPPORTED_LANGUAGE.map((lang) => {
    return {
      url: new URL(
        [lang, pathWithoutFirstSlash].filter(Boolean).join('/'),
        baseURL
      ).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          I18N_SUPPORTED_LANGUAGE.map((lang) => [
            lang,
            new URL(
              [lang, pathWithoutFirstSlash].filter(Boolean).join('/'),
              baseURL
            ).toString(),
          ])
        ),
      },
    }
  })
}

/**
 * Generate a external link for sitemap
 * @param url - The url of the external link
 * @returns The external link
 */
export const generateExternalLink = (
  url: string
): MetadataRoute.Sitemap[number] => {
  return {
    url,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }
}
