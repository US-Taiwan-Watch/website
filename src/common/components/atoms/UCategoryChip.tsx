'use client'

import clsx from 'clsx'
import { Avatar, Chip, ChipProps } from '@mui/material'
import Image from 'next/image'
import { ComponentType } from 'react'
import { styled } from '@/common/lib/mui/theme'

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

const getAvatarSize = (size: UCategoryChipProps['size'] = 'small') => {
  switch (size) {
    case 'small':
      return {
        width: 32,
        height: 32,
      }
    case 'medium':
      return {
        width: 40,
        height: 40,
      }
  }
}

const StyledChip = styled(Chip)<UCategoryChipProps>(({ theme, size }) => ({
  position: 'relative',
  backgroundColor: theme.color.categoryChip.backgroundColor,
  color: theme.color.categoryChip.textColor,
  height: getChipHeight(size),
  borderRadius: '100px',
  '& .MuiChip-avatar': {
    marginLeft: '0 !important',
    ...getAvatarSize(size),
  },
  '& .MuiChip-label': {
    padding: `0px ${theme.spacing(1.5)}`,
    fontWeight: 500,
  },
  '&:hover': {
    backgroundColor: theme.color.categoryChip.activeBackgroundColor,
    cursor: 'pointer',
    color: theme.color.categoryChip.activeTextColor,
  },
  '&.active': {
    backgroundColor: theme.color.categoryChip.activeBackgroundColor,
    color: theme.color.categoryChip.activeTextColor,
  },
})) as ComponentType<UCategoryChipProps>

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
            <Image src={img} alt={props.label || ''} {...getAvatarSize(size)} />
          </StyledAvatar>
        ) : undefined
      }
      size={size}
      {...props}
    />
  )
}

export default UCategoryChip
