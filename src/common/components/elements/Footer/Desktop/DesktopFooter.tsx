'use client'

import { styled } from '@/common/lib/mui/theme'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { Container, Stack, Typography } from '@mui/material'
import ULogo from '@/common/components/atoms/ULogo'
import UIconButton from '@/common/components/atoms/UIconButton'
import useLinks from '@/common/components/elements/Footer/useLinks'
import Link from 'next/link'
import UButton from '@/common/components/atoms/UButton'
import LanguageSwitcher from '@/common/components/elements/LanguageSwitcher'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

const StyledFooter = styled('footer')(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  color: theme.color.grey[1100],
}))

const StyledSubLinkContainer = styled(Stack)(() => ({}))

const StyledSubLinkBlock = styled(Stack)(() => ({
  maxHeight: '320px',
}))

const StyledBottomLink = styled(Link)(() => ({
  textDecoration: 'underline',
}))

const DesktopFooter = () => {
  const { resolveRouteUrl } = useURouterClient()
  const { t } = useTranslationClient('footer')
  const { socialLinkItems, subLinkItems } = useLinks()

  return (
    <UFullWidthBackgroundBox backgroundColor="common.black">
      <Container maxWidth="xl">
        <StyledFooter>
          {/** Top Section */}
          <Stack direction="column" spacing={6}>
            <Stack direction="row" justifyContent="space-between" gap={1}>
              {/* Logo */}
              <Stack direction="row" spacing={2} alignItems="center">
                <ULogo size="small" />
                <Typography variant="h5" fontWeight={700}>
                  {t('section.title', { ns: 'footer' })}
                </Typography>
              </Stack>
              {/* Social Links */}
              <Stack
                direction="row"
                gap={{
                  xs: 1,
                  lg: 2,
                }}
                alignContent="center"
              >
                {socialLinkItems.map((item, index) => (
                  <Link
                    href={item.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UIconButton variant="rounded" color="primary" size="small">
                      {item.icon}
                    </UIconButton>
                  </Link>
                ))}
              </Stack>
            </Stack>
            {/** Middle Section */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
            >
              {/* Sub Links */}
              <StyledSubLinkContainer
                direction="row"
                flexWrap="wrap"
                useFlexGap
                gap={{
                  xs: 6,
                  lg: 12,
                }}
              >
                {subLinkItems.map((item, index) => (
                  <StyledSubLinkBlock
                    key={index}
                    direction="column"
                    spacing={2}
                    useFlexGap
                    flexWrap="wrap"
                    rowGap={{
                      xs: 1,
                      lg: 1.5,
                    }}
                  >
                    {item.type === 'title' && (
                      <>
                        <Typography
                          paddingBottom={{
                            xs: 0.5,
                            lg: 1,
                          }}
                          fontWeight={700}
                        >
                          {item.title}
                        </Typography>
                        {item.subLinks.map(
                          (subItem, subIndex) =>
                            subItem.type === 'subLink' && (
                              <Link
                                href={subItem.url}
                                key={subIndex}
                                // phase1 還沒有做的頁面以 # 開頭
                                scroll={!subItem.url.startsWith('#')}
                              >
                                <Typography>{subItem.title}</Typography>
                              </Link>
                            )
                        )}
                      </>
                    )}
                  </StyledSubLinkBlock>
                ))}
              </StyledSubLinkContainer>
              {/** Donation Button */}
              <Link href={resolveRouteUrl({ name: RouteName.AboutDonation })}>
                <UButton
                  variant="contained"
                  color="secondary"
                  rounded
                  sx={{
                    fontWeight: 500,
                  }}
                >
                  {t('donation.btn.title', { ns: 'footer' })}
                </UButton>
              </Link>
            </Stack>
            {/** Bottom Section */}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={{
                xs: 5,
                lg: 15,
              }}
            >
              {/** Language Switcher */}
              <LanguageSwitcher />
              {/** Links: not for phase1 */}
              <Stack direction="row" gap={2} flex={1} alignItems="center">
                <StyledBottomLink
                  href={resolveRouteUrl({
                    name: RouteName.AboutUserAgreementPrivacyPolicy,
                  })}
                >
                  {t('navItem.privacy.title', { ns: 'footer' })}
                </StyledBottomLink>
              </Stack>
              {/** Copyright */}
              <Typography>
                © {t('section.copyright', { ns: 'footer' })}{' '}
                {new Date().getFullYear()}
              </Typography>
            </Stack>
          </Stack>
        </StyledFooter>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

export default DesktopFooter
