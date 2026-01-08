import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import UserAgreementPrivacyPolicyContent from '@/modules/About/UserAgreementPrivacyPolicy/components/UserAgreementPrivacyPolicyContent'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

export const dynamic = 'force-static'

export const revalidate = 86400

type AboutUserAgreementPrivacyPolicyPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutUserAgreementPrivacyPolicyPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({
      name: RouteName.AboutUserAgreementPrivacyPolicy,
    }),
    namespace: 'seo_about_user_agreement_privacy_policy',
  })
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
