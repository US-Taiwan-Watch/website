'use client'

import { USTWTheme } from '@/common/lib/mui/theme'
import { styled } from '@mui/material/styles'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import { Stack, Typography } from '@mui/material'
import ULogo from '@/common/components/atoms/ULogo'
import UIconButton from '@/common/components/atoms/UIconButton'
import useLinks from '@/common/components/elements/Footer/useLinks'
import Link from 'next/link'
import UButton from '@/common/components/atoms/UButton'
import LanguageSwitcher from '@/common/components/elements/LanguageSwitcher'

const StyledFooter = styled('footer')(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  color: (theme as USTWTheme).color.grey[1100],
}))

const StyledSubLinkContainer = styled(Stack)(() => ({
}))

const StyledSubLinkBlock = styled(Stack)(() => ({
  maxHeight: '300px',
}))

const StyledBottomLink = styled(Link)(() => ({
  textDecoration: 'underline',
}))

const Footer = () => {
  const { socialLinkItems, subLinkItems } = useLinks()

  return (
    <UFullWidthBackgroundBox backgroundColor="common.black">
      <StyledFooter>
        {/** Top Section */}
        <Stack direction="column" spacing={6}>
          <Stack direction="row" justifyContent="space-between">
            {/* Logo */}
            <Stack direction="row" spacing={2} alignItems="center">
              <ULogo size="small" />
              <Typography variant="h5" fontWeight={700}>US Taiwan Watch</Typography>
            </Stack>
            {/* Social Links */}
            <Stack direction="row" spacing={2} alignContent="center">
              {socialLinkItems.map((item, index) => (
                <Link href={item.url} key={index}>
                  <UIconButton variant="rounded" color="primary">
                    {item.icon}
                  </UIconButton>
                </Link>
              ))}
            </Stack>
          </Stack>
          {/** Middle Section */}
          <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
            {/* Sub Links */}
            <StyledSubLinkContainer direction="row" spacing={12} flexWrap="wrap" useFlexGap>
              {subLinkItems.map((item, index) => (
                <StyledSubLinkBlock
                  key={index}
                  direction="column"
                  spacing={2}
                  useFlexGap
                  flexWrap="wrap"
                  rowGap={2}
                  columnGap={12}
                >
                  {item.type === 'title' && (
                    <>
                      <Typography fontWeight={700}>{item.title}</Typography>
                      {item.subLinks.map(
                        (subItem, subIndex) =>
                          subItem.type === 'subLink' && (
                            <Link href={subItem.url} key={subIndex}>
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
            <UButton variant="contained" color="secondary" rounded>
              Donation
            </UButton>
          </Stack>
          {/** Bottom Section */}
          <Stack direction="row" spacing={8}>
            {/** Language Switcher */}
            <LanguageSwitcher />
            {/** Links */}
            <Stack direction="row" spacing={2} flex={1}>
              <StyledBottomLink href="/">User Agreement and Privacy Policy</StyledBottomLink>
              <StyledBottomLink href="/">FAQ</StyledBottomLink>
              <StyledBottomLink href="/">Data</StyledBottomLink>
            </Stack>
            {/** Copyright */}
            <Typography>
              © U.S. Taiwan Watch {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Stack>
      </StyledFooter>
    </UFullWidthBackgroundBox>
  )
}

export default Footer
