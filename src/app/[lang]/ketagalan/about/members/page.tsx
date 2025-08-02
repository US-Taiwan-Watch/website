import { KetagalanAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { MemberUtils } from '@/modules/About/Member/business/Member'
import MemberGroupCard from '@/modules/About/Member/components/MemberGroupCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'
import ServerMemberApi from '@/modules/About/Member/api/ServerMemberApi'

type KetagalanAboutMembersPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: KetagalanAboutMembersPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_ketagalan_about_member')

  return {
    title: t('meta.title', { ns: 'seo_ketagalan_about_member' }),
    description: t('meta.description', { ns: 'seo_ketagalan_about_member' }),
  }
}

export default async function KetagalanAboutMembersPage({
  params,
}: KetagalanAboutMembersPageProps) {
  const { lang } = params

  const members = await ServerMemberApi.getKetagalanMembers()
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
