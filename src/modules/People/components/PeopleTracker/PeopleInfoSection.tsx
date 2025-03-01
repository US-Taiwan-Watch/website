'use client'

import UButton from '@/common/components/atoms/UButton'
import UHStack from '@/common/components/atoms/UHStack'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import {
  LinkIcon,
  OpenSecretsIcon,
  InternetIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YoutubeIcon,
  BookmarkIcon,
} from '@/common/styles/assets/Icons'
import PeopleCategory from '@/modules/People/components/PeopleCategory'
import PeopleTag from '@/modules/People/components/PeopleTag'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React, { memo, MouseEvent, useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { People_Links_Type as PeopleLinkType } from '@/common/lib/graphql/__generated__/graphql'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import useClipboard from '@/common/hooks/useClipboard'
import { People } from '@/modules/People/business/People'

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

const StyledImage = styled(Image)(() => ({
  width: '200px',
  height: '240px',
  objectFit: 'cover',
  borderRadius: '10px',
}))

const StyledInfoContainer = styled(Stack)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2, 0),
}))

const StyledLinkButton = styled(UButton)(({ theme }) => ({
  backgroundColor: theme.color.common.white,
  color: theme.color.common.black,
  height: 'max-content',
  '&:hover': {
    backgroundColor: theme.color.common.white,
  },
}))

const StyledSubscribeButton = styled(UButton)(() => ({
  height: 'max-content',
}))

const LinkMenuActivator = memo(function LinkMenuActivator({
  people,
}: {
  people: People
}) {
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
      <StyledLinkButton
        id="link-button"
        variant="contained"
        startIcon={<LinkIcon sx={{ width: 16 }} />}
        rounded
        onClick={handleLinkBtnClick}
      >
        Link
      </StyledLinkButton>
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

interface PeopleInfoSectionProps {
  people: People
}

const PeopleInfoSection = memo(function PeopleInfoSection({
  people,
}: PeopleInfoSectionProps) {
  return (
    <UHStack spacing={2}>
      {/** 圖片 */}
      {people.image && (
        <StyledImage
          src={people.image}
          alt={people.name ?? ''}
          width={200}
          height={240}
        />
      )}

      {/** Info */}
      <StyledInfoContainer spacing={2}>
        <PeopleCategory people={people} />
        <Typography variant="h4">{people.name}</Typography>
        <Stack direction="row" gap={2} flexWrap="wrap">
          {people.tags?.map((tag) => <PeopleTag value={tag} key={tag} />)}
        </Stack>
      </StyledInfoContainer>

      {/** Actions */}
      <UHStack spacing={2}>
        <LinkMenuActivator people={people} />
        <StyledSubscribeButton
          variant="contained"
          color="primary"
          rounded
          startIcon={<BookmarkIcon sx={{ width: 16 }} />}
        >
          Subscribe
        </StyledSubscribeButton>
      </UHStack>
    </UHStack>
  )
})

export default PeopleInfoSection
