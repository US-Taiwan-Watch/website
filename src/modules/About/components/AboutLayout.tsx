import { Stack, SxProps } from '@mui/material'
import type React from 'react'
import AboutHeaderSection, {
  AboutHeaderTab,
} from '@/modules/About/components/AboutHeaderSection'
import UContainer from '@/common/components/atoms/UContainer'
import { Language } from '@/common/lib/i18n/types'
import getTranslationServer from '@/common/lib/i18n/hooks/getTranslationServer'
import getURouterServer from '@/common/lib/router/getURouterServer'
import { RouteName } from '@/common/lib/router/routes'

type AboutLayoutProps = {
  lang: Language
  containerSx?: SxProps
  /**
   * 是否顯示 Header Section
   * @default true
   */
  withHeaderSection?: boolean
  currentPathname: string
  children: React.ReactNode
  tabs: AboutHeaderTab[]
}

export default function AboutLayout({
  containerSx,
  withHeaderSection = true,
  currentPathname,
  children,
  tabs,
}: AboutLayoutProps) {
  return (
    <UContainer sx={containerSx}>
      <Stack
        sx={{
          width: {
            xs: '100%',
            sm: 'auto',
          },
          maxWidth: {
            xs: '100%',
            sm: '700px',
          },
          margin: '0 auto',
          px: {
            xs: 1,
            sm: 0,
          },
          py: {
            xs: 2.75,
            sm: 5,
          },
          gap: {
            xs: 2,
            md: 3,
            lg: 5,
          },
        }}
      >
        {withHeaderSection && (
          <AboutHeaderSection currentPathname={currentPathname} tabs={tabs} />
        )}
        {children}
      </Stack>
    </UContainer>
  )
}

export const UstwAboutLayout = async (
  props: Omit<AboutLayoutProps, 'tabs'>
) => {
  const { lang, children } = props

  const { t } = await getTranslationServer(lang, 'about')
  const { resolveRouteUrl } = getURouterServer()
  const tabs = [
    {
      label: t('tabs.mission', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.AboutMission }),
    },
    {
      label: t('tabs.projects', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.AboutProjects }),
    },
    {
      label: t('tabs.members', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.AboutMembers }),
    },
    {
      label: t('tabs.footprints', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.AboutFootprints }),
    },
    {
      label: t('tabs.data', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.AboutData }),
    },
    {
      label: t('tabs.newsroom', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.AboutNewsroom }),
    },
  ]

  return (
    <AboutLayout tabs={tabs} {...props}>
      {children}
    </AboutLayout>
  )
}

export const KetagalanAboutLayout = async (
  props: Omit<AboutLayoutProps, 'tabs'>
) => {
  const { lang, children } = props

  const { t } = await getTranslationServer(lang, 'about')
  const { resolveRouteUrl } = getURouterServer()
  const tabs = [
    {
      label: t('tabs.projects', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.KetagalanAboutProjects }),
    },
    {
      label: t('tabs.members', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.KetagalanAboutMembers }),
    },
    {
      label: t('tabs.footprints', { ns: 'about' }),
      path: resolveRouteUrl({ name: RouteName.KetagalanAboutFootprints }),
    },
  ]

  return (
    <AboutLayout tabs={tabs} {...props}>
      {children}
    </AboutLayout>
  )
}
