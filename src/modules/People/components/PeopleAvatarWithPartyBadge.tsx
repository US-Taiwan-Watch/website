'use client'

import { styled } from '@/common/lib/mui/theme'
import Image from 'next/image'
import { Box } from '@mui/material'
import { People } from '@/modules/People/business/People'
import usePartyColor from '@/common/lib/Party/usePartyColor'
import { Party } from '@/common/enums/Party'
import UPoliticalPartyIcon from '@/common/components/atoms/UPoliticalPartyIcon'

export type Size = 'small' | 'medium' | 'large'

const sizeMap = {
  small: {
    width: '30px',
    height: '30px',
  },
  medium: {
    width: '50px',
    height: '50px',
  },
  large: {
    width: '80px',
    height: '80px',
  },
}

const borderSizeMap = {
  small: '1px',
  medium: '2px',
  large: '4px',
}

const StyledImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '50%',
  marginRight: theme.spacing(3),
}))

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  objectFit: 'cover',
}))

const StyledPartyIconContainer = styled(Box)(() => ({
  position: 'absolute',
  bottom: -4,
  right: -5,
  zIndex: 1,
}))

type PeopleAvatarWithPartyBadgeProps = {
  people: People
  party: Party
  size?: Size
}

export const PeopleAvatarWithPartyBadge = ({
  party,
  people,
  size = 'medium',
}: PeopleAvatarWithPartyBadgeProps) => {
  const { partyColor } = usePartyColor()

  if (!people.image) return null

  return (
    <StyledImageContainer
      sx={{
        border: `${borderSizeMap[size]} solid`,
        borderColor: partyColor[party],
        ...sizeMap[size],
      }}
    >
      <StyledImage src={people.image} alt={people.name ?? ''} fill />
      <StyledPartyIconContainer>
        <UPoliticalPartyIcon
          size="small"
          party={party}
          sx={{
            width: '18px',
            height: '18px',
          }}
          customFontStyle={{
            fontSize: '12px',
          }}
        />
      </StyledPartyIconContainer>
    </StyledImageContainer>
  )
}
