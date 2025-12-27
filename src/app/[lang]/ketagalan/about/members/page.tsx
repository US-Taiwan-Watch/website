import { KetagalanAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { MemberUtils } from '@/modules/About/Member/business/Member'
import MemberGroupCard from '@/modules/About/Member/components/MemberGroupCard'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import ServerMemberApi from '@/modules/About/Member/api/ServerMemberApi'

type KetagalanAboutMembersPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: KetagalanAboutMembersPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.KetagalanAboutMembers }),
    namespace: 'seo_ketagalan_about_members',
  })
}

export default async function KetagalanAboutMembersPage({
  params,
}: KetagalanAboutMembersPageProps) {
  const { lang } = params

  const members = await ServerMemberApi.getKetagalanMembers(lang)
  const memberGroups = MemberUtils.parseMemberGroup(members)

  return (
    <KetagalanAboutLayout
      lang={lang}
      currentPathname={'/ketagalan/about/members'}
    >
      <Stack gap={2}>
        {memberGroups
          .filter((memberGroup) => memberGroup.members.length > 0)
          .map((memberGroup) => (
            <MemberGroupCard key={memberGroup.type} memberGroup={memberGroup} />
          ))}
      </Stack>
    </KetagalanAboutLayout>
  )
}
