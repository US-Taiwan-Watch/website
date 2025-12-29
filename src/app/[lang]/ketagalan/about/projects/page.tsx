import { KetagalanAboutLayout } from '@/modules/About/components/AboutLayout'
import { Stack } from '@mui/material'
import { Language } from '@/common/lib/i18n/types'
import ProjectCard from '@/modules/About/Project/components/ProjectCard'
import { Metadata } from 'next'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { generateCommonMetadata } from '@/common/utils/metadata'
import { RouteName } from '@/common/lib/router/routes'
import ServerProjectApi from '@/modules/About/Project/api/ServerProjectApi'

type KetagalanAboutProjectsPageProps = {
  params: {
    lang: Language
  }
}

export const generateMetadata = async ({
  params,
}: KetagalanAboutProjectsPageProps): Promise<Metadata> => {
  const { resolveRouteUrl } = getURouterServer()
  return generateCommonMetadata({
    lang: params.lang,
    pathname: resolveRouteUrl({ name: RouteName.KetagalanAboutProjects }),
    namespace: 'seo_ketagalan_about_projects',
  })
}

export default async function KetagalanAboutProjectsPage({
  params,
}: KetagalanAboutProjectsPageProps) {
  const { lang } = params
  const projects = await ServerProjectApi.getKetagalanProjects(lang)

  return (
    <KetagalanAboutLayout
      lang={lang}
      currentPathname={'/ketagalan/about/projects'}
    >
      <Stack gap={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Stack>
    </KetagalanAboutLayout>
  )
}
