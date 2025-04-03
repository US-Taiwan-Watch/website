'use client'

import useLinks, {
  SubLinkItem,
} from '@/common/components/elements/Footer/useLinks'
import UFullWidthBackgroundBox from '@/common/components/atoms/UFullWidthBackgroundBox'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import ULogo from '@/common/components/atoms/ULogo'
import Typography from '@mui/material/Typography'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UIconButton from '@/common/components/atoms/UIconButton'
import { useMemo, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Link from 'next/link'
import { useTheme } from '@mui/material'
import UButton from '@/common/components/atoms/UButton'
import LanguageSwitcher from '@/common/components/elements/LanguageSwitcher'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { ROUTES } from '@/routes'

const StyledNavItemListTitleContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.color.neutral[400]}`,
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  color: theme.color.grey[1100],
}))

const StyledNavItemListItemContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.color.neutral[500],
  borderBottom: `1px solid ${theme.color.neutral[500]}`,
  paddingTop: theme.spacing(1.5),
  paddingBottom: theme.spacing(1.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}))

const MobileFooterNavMenuItem = ({
  item,
  onMenuItemClick,
}: {
  item: SubLinkItem
  onMenuItemClick?: (item: SubLinkItem) => void
}) => {
  const hasAccordion = useMemo(() => item.type === 'title', [item.type])
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  return (
    <Stack width="100%">
      <StyledNavItemListTitleContainer
        onClick={() => {
          setIsAccordionOpen(!isAccordionOpen)
          onMenuItemClick?.(item)
        }}
      >
        <Typography fontWeight={600}>{item.title}</Typography>
        {hasAccordion && (
          <UIconButton variant="contained" color="default" size="small">
            {isAccordionOpen ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </UIconButton>
        )}
      </StyledNavItemListTitleContainer>
      {isAccordionOpen && hasAccordion && item.type === 'title' && (
        <Stack gap={1}>
          {item.subLinks.map((item) =>
            item.type === 'subLink' ? (
              <Link
                href={item.url}
                key={item.title}
                onClick={() => onMenuItemClick?.(item)}
              >
                <StyledNavItemListItemContainer>
                  <Typography fontWeight={600}>{item.title}</Typography>
                </StyledNavItemListItemContainer>
              </Link>
            ) : null
          )}
        </Stack>
      )}
    </Stack>
  )
}

const MobileFooterNavMenuItemList = ({
  onMenuItemClick,
}: {
  onMenuItemClick?: (item: SubLinkItem) => void
}) => {
  const theme = useTheme<USTWTheme>()
  const { subLinkItems } = useLinks()
  return (
    <Stack width="100%" borderTop={`1px solid ${theme.color.neutral[500]}`}>
      {subLinkItems.map((item) => (
        <MobileFooterNavMenuItem
          key={item.title}
          item={item}
          onMenuItemClick={onMenuItemClick}
        />
      ))}
    </Stack>
  )
}

const StyledLogoText = styled(Typography)(({ theme }) => ({
  color: theme.color.common.white,
}))

const MobileFooter = () => {
  const theme = useTheme<USTWTheme>()
  const { socialLinkItems } = useLinks()
  const { t } = useTranslationClient('footer')

  return (
    <UFullWidthBackgroundBox backgroundColor="common.black">
      <Container maxWidth="xl">
        <Box
          sx={{
            paddingX: 0.5,
            paddingTop: 2.5,
            paddingBottom: 5,
            color: theme.color.common.white,
          }}
        >
          <Stack gap={2}>
            {/* Logo */}
            <Stack
              direction="row"
              spacing={2}
              alignItems="flex-end"
              sx={{
                marginBottom: theme.spacing(2),
              }}
            >
              <ULogo size="xs" />
              <StyledLogoText
                variant="subtitleL"
                fontWeight={700}
                lineHeight={1}
              >
                {t('section.title', { ns: 'footer' })}
              </StyledLogoText>
            </Stack>

            {/* Nav Menu */}
            <MobileFooterNavMenuItemList />

            {/* Social Links */}
            <Stack
              direction="row"
              gap={2}
              alignContent="center"
              flexWrap="wrap"
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

            {/** Donation Button */}
            <Box>
              <Link href={ROUTES.ABOUT_DONATION}>
                <UButton
                  variant="contained"
                  color="secondary"
                  rounded
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  Donation
                </UButton>
              </Link>
            </Box>

            {/** Language Switcher */}
            <LanguageSwitcher />

            {/** Copyright */}
            <Typography>
              © U.S. Taiwan Watch {new Date().getFullYear()}
            </Typography>
          </Stack>
        </Box>
      </Container>
    </UFullWidthBackgroundBox>
  )
}

export default MobileFooter
