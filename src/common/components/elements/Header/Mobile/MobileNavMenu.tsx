import { styled } from '@/common/lib/mui/theme'
import { memo, useMemo, useCallback, useState, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useNavItems, {
  HeaderNavItem,
} from '@/common/components/elements/Header/useNavItems'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import UIconButton from '@/common/components/atoms/UIconButton'
import Link from 'next/link'
import UButton from '@/common/components/atoms/UButton'
import useSocialLinks from '@/common/hooks/useSocialLinks'
import HeaderPopper from '@/common/components/elements/Header/HeaderPopper'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import UHStack from '@/common/components/atoms/UHStack'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

const StyledNavItemListTitleContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.color.header.mobileNavMenuDivider}`,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  minHeight: theme.spacing(5),
}))

const StyledNavItemListItemContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.color.header.mobileNavMenuListItemText,
  borderBottom: `1px solid ${theme.color.header.mobileNavMenuDivider}`,
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
}))

const MobileNavMenuItem = ({
  item,
  onMenuItemClick,
}: {
  item: HeaderNavItem
  onMenuItemClick?: (item: HeaderNavItem) => void
}) => {
  const hasAccordion = useMemo(() => item.type === 'list', [item.type])
  const [isAccordionOpen, setIsAccordionOpen] = useState(false)

  const Wrapper = useMemo(() => {
    if (hasAccordion || item.type === 'list') {
      return function Wrapper({ children }: { children: ReactNode }) {
        return <Stack width="100%">{children}</Stack>
      }
    }

    return function Wrapper({ children }: { children: ReactNode }) {
      return <Link href={item.href}>{children}</Link>
    }
  }, [hasAccordion, item])

  return (
    <Wrapper>
      <StyledNavItemListTitleContainer
        onClick={() => {
          setIsAccordionOpen(!isAccordionOpen)
          onMenuItemClick?.(item)
        }}
      >
        <Typography fontWeight={600}>{item.title}</Typography>
        {hasAccordion && (
          <UIconButton
            variant="contained"
            color="default"
            size="small"
            sx={{ p: 0, width: '24px', height: '24px' }}
          >
            {isAccordionOpen ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </UIconButton>
        )}
      </StyledNavItemListTitleContainer>
      {isAccordionOpen && hasAccordion && item.type === 'list' && (
        <Stack gap={1}>
          {item.list.map((item) =>
            item.type === 'link' ? (
              <Link
                href={item.href}
                key={item.id}
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
    </Wrapper>
  )
}

const MobileNavMenuItemList = ({
  onMenuItemClick,
}: {
  onMenuItemClick?: (item: HeaderNavItem) => void
}) => {
  const { navItems } = useNavItems()
  return (
    <Stack width="100%" paddingTop={2} paddingBottom={4}>
      {navItems.map((item) => (
        <MobileNavMenuItem
          key={item.id}
          item={item}
          onMenuItemClick={onMenuItemClick}
        />
      ))}
    </Stack>
  )
}

interface MobileNavMenuProps {
  anchorEl: HTMLElement | null
  /**
   * 點擊其他區域不會觸發 onClickAway
   * 例如：點擊 Menu 按鈕不會觸發 onClickAway
   */
  clickAwayClassNameWhiteList?: string[]
  onClose?: () => void
  /**
   * 點擊連結時的 callback
   */
  onLinkMenuItemClick?: (item: HeaderNavItem) => void
}

const StyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  backgroundColor: theme.color.header.mobileNavMenuBackground,
  borderRadius: '30px',
  paddingTop: `${theme.constants.headerHeight.sm}px`,
  paddingBottom: theme.spacing(2.75),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}))

const StyledNavMenuWrapper = styled(Stack)(({ theme }) => ({
  width: '100%',
  '& .donation-button': {
    backgroundColor: theme.color.header.donationButton,
    color: theme.color.header.donationButtonText,
  },
}))

const MobileNavMenu = ({
  anchorEl,
  clickAwayClassNameWhiteList,
  onClose,
  onLinkMenuItemClick,
}: MobileNavMenuProps) => {
  const { t } = useTranslationClient('header')
  const { socialLinkItems } = useSocialLinks()
  const { resolveRouteUrl } = useURouterClient()

  const handleMenuItemClick = useCallback(
    (item: HeaderNavItem) => {
      if (item.type === 'link') {
        onLinkMenuItemClick?.(item)
        onClose?.()
      }
    },
    [onLinkMenuItemClick, onClose]
  )

  return (
    <HeaderPopper
      anchorEl={anchorEl}
      clickAwayClassNameWhiteList={clickAwayClassNameWhiteList}
      onClose={onClose}
    >
      <StyledContainer>
        <StyledNavMenuWrapper width="100%" gap={2}>
          {/** 連結 */}
          <MobileNavMenuItemList onMenuItemClick={handleMenuItemClick} />
          {/** 捐款 */}
          <Box width="100%" display="flex" justifyContent="center">
            <Link
              href={resolveRouteUrl({ name: RouteName.AboutDonation })}
              style={{ width: '100%' }}
            >
              <UButton
                className="donation-button"
                variant="contained"
                rounded
                sx={{
                  width: '100%',
                }}
              >
                {t('mobile.donation.btn.title', { ns: 'header' })}
              </UButton>
            </Link>
          </Box>
          {/** 社群 */}
          <UHStack
            gap={1}
            justifyContent={{
              xs: 'space-between',
              sm: 'flex-end',
            }}
            flexWrap="wrap"
          >
            {socialLinkItems.map((item, index) => (
              <Link
                href={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
              >
                <UIconButton variant="rounded" color="secondary" size="small">
                  {item.icon}
                </UIconButton>
              </Link>
            ))}
          </UHStack>
        </StyledNavMenuWrapper>
      </StyledContainer>
    </HeaderPopper>
  )
}

export default memo(MobileNavMenu)
