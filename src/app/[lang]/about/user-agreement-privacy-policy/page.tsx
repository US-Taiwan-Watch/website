import AboutLayout from '@/modules/About/components/AboutLayout'
import { Box } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import UserAgreementPrivacyPolicyContent from '@/modules/About/UserAgreementPrivacyPolicy/components/UserAgreementPrivacyPolicyContent'

type AboutUserAgreementPrivacyPolicyPageProps = {
  params: {
    lang: Language
  }
}

export default function AboutUserAgreementPrivacyPolicyPage({
  params,
}: AboutUserAgreementPrivacyPolicyPageProps) {
  const { lang } = params

  return (
    <AboutLayout
      withHeaderSection={false}
      currentPathname={'/about/user-agreement-privacy-policy'}
    >
      <Box>
        <UserAgreementPrivacyPolicyContent lang={lang} />
      </Box>
    </AboutLayout>
  )
}
