'use client'

import clsx from 'clsx'
import { Avatar, Chip, ChipProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import { ComponentType } from 'react'

interface UCategoryChipProps extends ChipProps {
  img?: string
  label?: string
  active?: boolean
}

const getChipHeight = (size: UCategoryChipProps['size']) => {
  switch (size) {
    case 'small':
      return 32
    case 'medium':
      return 40
  }
}

const getAvatarSize = (
  size: UCategoryChipProps['size'] = 'small',
  active?: boolean
) => {
  switch (size) {
    case 'small':
      return {
        width: 32 * (active ? 2 : 1),
        height: 32,
      }
    case 'medium':
      return {
        width: 40 * (active ? 2 : 1),
        height: 40,
      }
  }
}

const StyledChip = styled(Chip)<UCategoryChipProps>(
  ({ theme, size, active }) => ({
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    height: getChipHeight(size),
    borderRadius: '100px',
    '& .MuiChip-avatar': {
      marginLeft: '0 !important',
      ...getAvatarSize(size, active),
    },
    '& .MuiChip-label': {
      padding: `0px ${theme.spacing(1.5)}`,
      fontWeight: 500,
    },
    '&:hover': {
      backgroundColor: theme.palette.common.white,
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 'inherit',
        zIndex: 1,
      },
      cursor: 'pointer',
    },
    '&.active': {
      backgroundColor: theme.palette.primary.main,
    },
  })
) as ComponentType<UCategoryChipProps>

const StyledAvatar = styled(Avatar)(() => ({
  borderRadius: '100px',
  img: {
    objectFit: 'cover',
  },
}))

const UCategoryChip = ({
  img,
  size = 'small',
  active = false,
  ...props
}: UCategoryChipProps) => {
  return (
    <StyledChip
      className={clsx({
        active,
      })}
      avatar={
        img ? (
          <StyledAvatar>
            <Image
              src={img}
              alt={props.label || ''}
              {...getAvatarSize(size, active)}
            />
          </StyledAvatar>
        ) : undefined
      }
      size={size}
      active={active}
      {...props}
    />
  )
}

export default UCategoryChip
