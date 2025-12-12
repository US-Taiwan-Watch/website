import { config } from '@/config'
import { Language } from '@/common/lib/i18n/types'
import { Metadata } from 'next/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { I18N_SUPPORTED_LANGUAGE } from '@/common/lib/i18n/settings'

const SOCIAL_SHARE_IMAGE_URL = new URL(
  '/assets/social-share-cover.png',
  config.WEB_BASE_URL
).toString()

/**
 * 生成通用 metadata，
 * 包含 canonical url 、 alternate url 和 SEO 的翻譯 title & description。
 *
 * - 生成 alternates：
 * 生成不同語言的 canonical url，
 * 並透過 languages 回傳不同語言的 alternate url。
 *
 * - 生成翻譯 title & description：
 * 透過 SEO 的語言包，
 * 可觀察出 title & description 的 key 是有 pattern 的，
 * 分別是不同 namespace 的 meta.title & meta.description。
 */
export const generateCommonMetadata = async ({
  lang,
  pathname,
  namespace,
  titleVariables,
  descriptionVariables,
}: {
  lang: Language
  pathname?: string
  namespace?: string
  titleVariables?: Record<string, string | number>
  descriptionVariables?: Record<string, string>
}): Promise<{
  title?: Metadata['title']
  description?: Metadata['description']
  alternates: Metadata['alternates']
  openGraph: Metadata['openGraph']
}> => {
  if (pathname?.startsWith('/')) {
    pathname = pathname.slice(1)
  }
  const langPathname = `${lang}${pathname ? `/${pathname}` : ''}`
  const baseUrl = new URL(langPathname, config.WEB_BASE_URL).toString()

  // Generate alternates for the current path
  const languages = I18N_SUPPORTED_LANGUAGE.reduce(
    (acc, language) => {
      const url = new URL(
        `${language}${pathname ? `/${pathname}` : ''}`,
        config.WEB_BASE_URL
      ).toString()
      acc[language] = url
      return acc
    },
    {} as Record<Language, string>
  )
  const alternates = {
    canonical: baseUrl,
    languages: {
      zh: languages['zh-TW'],
      en: languages['en-US'],
    },
  }

  const { t } = await getTranslationServer(lang, namespace)

  // Metadata for Open Graph
  const openGraph: Metadata['openGraph'] = {
    title: t('og.title', { ns: 'seo_common' }),
    description: t('og.description', { ns: 'seo_common' }),
    url: baseUrl,
    siteName: t('og.siteName', { ns: 'seo_common' }),
    images: [{ url: SOCIAL_SHARE_IMAGE_URL }],
    type: 'website',
  }

  // 如果沒提供 i18n namespace，則不回傳 title 和 description
  if (!namespace) {
    return {
      alternates,
      openGraph,
    }
  }

  const title = t('meta.title', {
    ns: namespace,
    ...titleVariables,
  })

  const description = t('meta.description', {
    ns: namespace,
    ...descriptionVariables,
  })

  return {
    // 如果 title 是 meta.title，代表沒有該翻譯，則不回傳 title
    ...(title !== 'meta.title' && { title }),
    // 如果 description 是 meta.description，代表沒有該翻譯，則不回傳 description
    ...(description !== 'meta.description' && { description }),
    alternates,
    openGraph: {
      ...openGraph,
      ...(title !== 'meta.title' && { title }),
      ...(description !== 'meta.description' && { description }),
    },
  }
}
