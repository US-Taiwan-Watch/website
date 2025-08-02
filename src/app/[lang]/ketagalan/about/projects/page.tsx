import KetagalanAboutLayout from '@/modules/About/components/KetagalanAboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import ProjectCard from '@/modules/About/Project/components/ProjectCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'
import ServerProjectApi from '@/modules/About/Project/api/ServerProjectApi'

type KetagalanAboutProjectsPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: KetagalanAboutProjectsPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_ketagalan_about_project')

  return {
    title: t('meta.title', { ns: 'seo_ketagalan_about_project' }),
    description: t('meta.description', { ns: 'seo_ketagalan_about_project' }),
  }
}

export default async function KetagalanAboutProjectsPage() {
  const projects = await ServerProjectApi.getKetagalanProjects()

  return (
    <KetagalanAboutLayout currentPathname={'/ketagalan/about/projects'}>
      <Stack gap={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
    </KetagalanAboutLayout>
  )
}
