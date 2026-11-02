import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import TermsOfServiceAndPrivacyPolicyContent from '@/modules/About/TermsOfServiceAndPrivacyPolicy/components/TermsOfServiceAndPrivacyPolicyContent'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'

type AboutTermsOfServiceAndPrivacyPolicyPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutTermsOfServiceAndPrivacyPolicyPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({
      name: RouteName.AboutTermsOfServiceAndPrivacyPolicy,
    }),
    namespace: 'seo_about_terms_of_service_and_privacy_policy',
  })
}
export default function AboutTermsOfServiceAndPrivacyPolicyPage({
  params,
}: AboutTermsOfServiceAndPrivacyPolicyPageProps) {
  const { lang } = params

  return (
    <UstwAboutLayout
      lang={lang}
      withHeaderSection={false}
      currentPathname={'/about/terms-of-service-and-privacy-policy'}
    >
      <Box>
        <TermsOfServiceAndPrivacyPolicyContent lang={lang} />
      </Box>
    </UstwAboutLayout>
  )
}
