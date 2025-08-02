import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import UserAgreementPrivacyPolicyContent from '@/modules/About/UserAgreementPrivacyPolicy/components/UserAgreementPrivacyPolicyContent'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

type AboutUserAgreementPrivacyPolicyPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutUserAgreementPrivacyPolicyPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(
    lang,
    'seo_about_user_agreement_privacy_policy'
  )

  return {
    title: t('meta.title', { ns: 'seo_about_user_agreement_privacy_policy' }),
    description: t('meta.description', {
      ns: 'seo_about_user_agreement_privacy_policy',
    }),
  }
}
export default function AboutUserAgreementPrivacyPolicyPage({
  params,
}: AboutUserAgreementPrivacyPolicyPageProps) {
  const { lang } = params

  return (
    <UstwAboutLayout
      lang={lang}
      withHeaderSection={false}
      currentPathname={'/about/user-agreement-privacy-policy'}
    >
      <Box>
        <UserAgreementPrivacyPolicyContent lang={lang} />
      </Box>
    </UstwAboutLayout>
  )
}
