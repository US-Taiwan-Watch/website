import AboutLayout from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { Member, MemberUtils } from '@/modules/About/Member/business/Member'
import MemberGroupCard from '@/modules/About/Member/components/MemberGroupCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

type AboutMembersPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutMembersPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_member')

  return {
    title: t('meta.title', { ns: 'seo_about_member' }),
    description: t('meta.description', { ns: 'seo_about_member' }),
  }
}

export default function AboutMembersPage({ params }: AboutMembersPageProps) {
  const { lang } = params

  /** TODO: 實作 API 取得 */
  const members: Member[] = []
  const memberGroups = MemberUtils.parseMemberGroup(members)

  return (
    <AboutLayout currentPathname={'/about/members'}>
      <Stack gap={2}>
        {memberGroups.map((memberGroup) => (
          <MemberGroupCard
            key={memberGroup.type}
            lang={lang}
            memberGroup={memberGroup}
          />
        ))}
      </Stack>
    </AboutLayout>
  )
}
