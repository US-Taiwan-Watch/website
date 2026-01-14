import { UstwAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import ProjectCard from '@/modules/About/Project/components/ProjectCard'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import ServerProjectApi from '@/modules/About/Project/api/ServerProjectApi'

type AboutProjectsPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: AboutProjectsPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.AboutProjects }),
    namespace: 'seo_about_projects',
  })
}

export default async function AboutProjectsPage({
  params,
}: AboutProjectsPageProps) {
  const { lang } = params

  const projects = await ServerProjectApi.getUstwProjects(lang)

  return (
    <UstwAboutLayout lang={lang} currentPathname={'/about/projects'}>
      <Stack gap={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
    </UstwAboutLayout>
  )
}
