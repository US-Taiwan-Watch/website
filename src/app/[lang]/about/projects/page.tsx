import AboutLayout from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { ProjectUtils } from '@/modules/About/Project/business/Project'
import ProjectCard from '@/modules/About/Project/components/ProjectCard'

const MOCK_API_PROJECTS = [
  {
    id: '1',
    title: 'Revamped Text Editor',
    description:
      '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    image: '/assets/category1.jpg',
  },
  {
    id: '2',
    title: 'Neque porro quisquam est qui dolorem ipsum',
    description:
      'Nullam vehicula volutpat lectus in laoreet. Nam interdum dignissim risus, ut elementum justo pharetra vel. Integer ac lacus vestibulum, aliquam leo eu, dictum diam. Etiam sollicitudin blandit mi, vitae lacinia nisi. Aenean sed lectus id lacus semper fringilla non sit amet risus. Ut pretium pulvinar dignissim. Etiam sit amet urna nisi.',
    image: '/assets/category1.jpg',
  },
]

type AboutProjectsPageProps = {
  params: {
    lang: Language
  }
}

export default function AboutProjectsPage({ params }: AboutProjectsPageProps) {
  const { lang } = params

  const projects = MOCK_API_PROJECTS.map((project) =>
    ProjectUtils.parse(lang, project)
  )

  return (
    <AboutLayout currentPathname={'/about/projects'}>
      <Stack gap={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
    </AboutLayout>
  )
}
