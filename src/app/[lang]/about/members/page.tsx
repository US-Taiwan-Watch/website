import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { MemberUtils } from '@/modules/About/Member/business/Member'
import MemberGroupCard from '@/modules/About/Member/components/MemberGroupCard'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import ServerMemberApi from '@/modules/About/Member/api/ServerMemberApi'

export const dynamic = 'force-static'

export const revalidate = 86400

type AboutMembersPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutMembersPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutMembers }),
    namespace: 'seo_about_members',
  })
}

export default async function AboutMembersPage({
  params,
}: AboutMembersPageProps) {
  const { lang } = params

  const members = await ServerMemberApi.getUstwMembers(lang)
  const memberGroups = MemberUtils.parseMemberGroup(members)

  return (
    <UstwAboutLayout lang={lang} currentPathname={'/about/members'}>
      <Stack gap={2}>
        {memberGroups
          .filter((memberGroup) => memberGroup.members.length > 0)
          .map((memberGroup) => (
            <MemberGroupCard key={memberGroup.type} memberGroup={memberGroup} />
          ))}
      </Stack>
    </UstwAboutLayout>
  )
}
