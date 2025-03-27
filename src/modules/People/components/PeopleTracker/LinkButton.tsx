import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { memo, useState, MouseEvent } from 'react'
import { People } from '@/modules/People/business/People'
import useClipboard from '@/common/hooks/useClipboard'
import { People_Links_Type as PeopleLinkType } from '@/common/lib/graphql/__generated__/graphql'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UIconButton from '@/common/components/atoms/UIconButton'
import UButton from '@/common/components/atoms/UButton'
import {
  LinkIcon,
  OpenSecretsIcon,
  InternetIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
} from '@/common/styles/assets/Icons'
import UHStack from '@/common/components/atoms/UHStack'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material'
import type React from 'react'

const ICON_SIZE = 20
const StyledIconWrapper = styled(Box)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    width: ICON_SIZE,
    height: ICON_SIZE,
    color: theme.color.grey[3800],
  },
}))
const LINK_ICON_MAP: Record<PeopleLinkType, React.ReactNode> = {
  [PeopleLinkType.OpenSecrets]: <OpenSecretsIcon />,
  [PeopleLinkType.Other]: <InternetIcon />,
  [PeopleLinkType.Facebook]: <FacebookIcon />,
  [PeopleLinkType.Instagram]: <InstagramIcon />,
  [PeopleLinkType.Twitter]: <XIcon />,
  [PeopleLinkType.Youtube]: <YoutubeIcon />,
}

const StyledLinkButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

const LinkButton = memo(function LinkButton({ people }: { people: People }) {
  const { isMobile } = useResponsive()
  const { copyUrl } = useClipboard()
  const theme = useTheme<USTWTheme>()
  const [linkBtnAnchorEl, setLinkBtnAnchorEl] = useState<null | HTMLElement>(
    null
  )
  const open = Boolean(linkBtnAnchorEl)
  const handleLinkBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    setLinkBtnAnchorEl(event.currentTarget)
  }
  const handleLinkMenuClose = () => {
    setLinkBtnAnchorEl(null)
  }

  if (people.links.length === 0) return null

  return (
    <>
      {isMobile ? (
        <UIconButton
          id="link-button"
          variant="rounded"
          color="white"
          size="xs"
          onClick={handleLinkBtnClick}
        >
          <LinkIcon />
        </UIconButton>
      ) : (
        <StyledLinkButton
          id="link-button"
          variant="contained"
          startIcon={<LinkIcon sx={{ width: 16 }} />}
          rounded
          onClick={handleLinkBtnClick}
        >
          Link
        </StyledLinkButton>
      )}
      <Menu
        id="link-menu"
        anchorEl={linkBtnAnchorEl}
        open={open}
        onClose={handleLinkMenuClose}
        MenuListProps={{
          'aria-labelledby': 'link-button',
          sx: {
            p: 2.5,
          },
        }}
        slotProps={{
          paper: {
            style: {
              minWidth: '260px',
              transform: 'translateY(10px)',
              borderRadius: theme.shape.borderRadius * 3,
            },
          },
        }}
      >
        <Stack gap={1}>
          {people.links.map((link) => (
            <MenuItem
              key={link.id}
              sx={{
                py: 0,
                px: 0.75,
                '&:hover': {
                  backgroundColor: theme.color.indigo[900],
                },
                borderRadius: theme.shape.borderRadius,
              }}
              onClick={() => {
                if (!link.link) return
                copyUrl(link.link)
              }}
            >
              <UHStack gap={1.25} alignItems="center">
                <StyledIconWrapper
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {LINK_ICON_MAP[link.type ?? PeopleLinkType.Other]}
                </StyledIconWrapper>
                <Typography variant="body1">{link.title}</Typography>
              </UHStack>
            </MenuItem>
          ))}
        </Stack>
      </Menu>
    </>
  )
})

export default LinkButton
