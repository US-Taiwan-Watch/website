import { getOptions } from '@/common/lib/i18n/settings'
import type { Language } from '@/common/lib/i18n/types'
import { createInstance, i18n, Namespace, TFunction } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'

const initI18next = async (lang: Language, ns?: string | string[]) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: Language, namespace: string) =>
          import(`../locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lang, ns))
  return i18nInstance
}

/**
 * Hook to use i18next on server side.
 * @see {@link https://locize.com/blog/next-app-dir-i18n/}
 */
export default async function getTranslationServer(
  lang: Language,
  namespace?: string | string[],
  options?: {
    keyPrefix?: string
  }
): Promise<{
  t: TFunction<Namespace, string>
  i18n: i18n
}> {
  const i18nextInstance = await initI18next(lang, namespace)
  return {
    t: i18nextInstance.getFixedT(lang, namespace, options?.keyPrefix),
    i18n: i18nextInstance,
  }
}
