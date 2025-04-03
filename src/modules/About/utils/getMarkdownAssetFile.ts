import { Language } from '@/common/lib/i18n/types'
import { I18N_FALLBACK_LANGUAGE } from '@/common/lib/i18n/settings'

type AboutModule =
  | 'Mission'
  | 'Newsroom'
  | 'Data'
  | 'UserAgreementPrivacyPolicy'
  | 'Donation'

export const getMarkdownAssetFile = async (
  module: AboutModule,
  lang: Language
) => {
  try {
    return (await import(`@/modules/About/${module}/assets/${lang}.md`)).default
  } catch {
    return (
      await import(
        `@/modules/About/${module}/assets/${I18N_FALLBACK_LANGUAGE}.md`
      )
    ).default
  }
}
