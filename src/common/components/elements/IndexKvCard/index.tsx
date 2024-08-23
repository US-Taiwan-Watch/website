'use client'

import { memo } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'

const StyledIndexKvCardContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2, 2, 2, 4),
  borderRadius: '30px',
}))

const StyledTag = styled('div')(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${(theme as USTWTheme).color.common.black}`,
  padding: '0px 9px',
}))

const StyledImage = styled(Image)(() => ({
  width: '600px',
  height: '500px',
  objectFit: 'cover',
  borderRadius: '10px',
}))

const StyledLeftSection = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}))

const StyledMiddleSection = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(4, 0),
}))

const StyledTitleTypography = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

const StyledDescriptionTypography = styled(Typography)(() => ({
  display: '-webkit-box',
  WebkitLineClamp: 5,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}))

// TODO: 確認類型
interface IndexKvCardProps {
  tags: Array<string>;
  title: string;
  description: string;
  image: string;
  href: string;
}

const IndexKvCard = memo(function IndexKvCard (props: IndexKvCardProps) {
  return (
    <StyledIndexKvCardContainer>
      <Stack direction="row" spacing={8}>
        <StyledLeftSection direction="column" spacing={4}>
          {/** Tags */}
          <Stack direction="row" spacing={1}>
            {props.tags.map((tag, index) => (
              <StyledTag key={index}>
                <Typography variant="caption">{tag}</Typography>
              </StyledTag>
            ))}
          </Stack>

          {/** Middle Section */}
          <StyledMiddleSection direction="column" spacing={2} flex={1}>
            <StyledTitleTypography variant="h3" fontWeight={500}>
              {props.title}
            </StyledTitleTypography>
            <StyledDescriptionTypography variant="body1" sx={{}}>
              {props.description}
            </StyledDescriptionTypography>
          </StyledMiddleSection>

          {/** Learn More Button */}
          <Link href={props.href}>
            <UButton variant="contained" color="info" rounded size="large">
              Learn More
            </UButton>
          </Link>
        </StyledLeftSection>
        <StyledImage
          src={props.image}
          alt={props.title}
          width={600}
          height={500}
        />
      </Stack>
    </StyledIndexKvCardContainer>
  )
})

export default IndexKvCard
