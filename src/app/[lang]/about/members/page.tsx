import AboutLayout from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { MemberUtils } from '@/modules/About/Member/business/Member'
import MemberGroupCard from '@/modules/About/Member/components/MemberGroupCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

const MOCK_API_MEMBER_GROUPS = [
  {
    id: '1',
    name: 'Board of directors',
    members: [
      {
        id: '1',
        name: 'John Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
      {
        id: '2',
        name: 'Jane Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
      {
        id: '3',
        name: 'John Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
      {
        id: '4',
        name: 'John Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
    ],
  },
  {
    id: '2',
    name: 'Board of directors',
    members: [
      {
        id: '1',
        name: 'John Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
      {
        id: '2',
        name: 'Jane Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
      {
        id: '3',
        name: 'John Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
      {
        id: '4',
        name: 'John Doe',
        description:
          'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.Egestas elit dui ',
        image: '/assets/category1.jpg',
      },
    ],
  },
]

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

  const memberGroups = MOCK_API_MEMBER_GROUPS.map((group) =>
    MemberUtils.parseMemberGroup(lang, group)
  )

  return (
    <AboutLayout currentPathname={'/about/members'}>
      <Stack gap={2}>
        {memberGroups.map((memberGroup) => (
          <MemberGroupCard key={memberGroup.id} memberGroup={memberGroup} />
        ))}
      </Stack>
    </AboutLayout>
  )
}
