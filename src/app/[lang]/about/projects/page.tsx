import AboutLayout from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import { Project } from '@/modules/About/Project/business/Project'
import ProjectCard from '@/modules/About/Project/components/ProjectCard'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import { Metadata } from 'next/types'

type AboutProjectsPageProps = {
  params: {
    lang: Language
  }
}

export async function generateMetadata({
  params,
}: AboutProjectsPageProps): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslationServer(lang, 'seo_about_project')

  return {
    title: t('meta.title', { ns: 'seo_about_project' }),
    description: t('meta.description', { ns: 'seo_about_project' }),
  }
}

export default function AboutProjectsPage() {
  /** TODO: 實作 API 取得 */
  const projects: Project[] = []

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
