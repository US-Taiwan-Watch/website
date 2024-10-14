'use client'

import { KetagalanMedia } from '@/modules/KetagalanMedia/classes/KetagalanMedia'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import Image from 'next/image'
import UHStack from '@/common/components/atoms/UHStack'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'

const StyledImageContainer = styled(Box)(() => ({
  borderRadius: '7px',
  overflow: 'hidden',
  width: '100%',
}))

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}))

const StyledTag = styled(UHStack)(({ theme }) => ({
  border: `0.5px solid ${theme.color.wheat[200]}`,
  borderRadius: '5px',
  padding: theme.spacing(0.5, 1),
}))

const StyledText = styled(UHeightLimitedText)(({ theme }) => ({
  color: theme.color.common.white,
}))

type Props = {
  media: KetagalanMedia
}

const KetagalanMediaCard = ({ media }: Props) => {
  const theme = useTheme<USTWTheme>()

  return (
    <Stack width="100%" height={365} gap="20px">
      <StyledImageContainer>
        {media.image && (
          <StyledImage
            src={media.image}
            alt={media.title || ''}
            width={380}
            height={200}
            layout="responsive"
          />
        )}
      </StyledImageContainer>
      <Stack gap="10px">
        <UHStack spacing={1}>
          {media.tags?.map((tag, index) => (
            <StyledTag key={index}>
              <Typography variant="buttonXXS" color={theme.color.wheat[200]}>
                {tag}
              </Typography>
            </StyledTag>
          ))}
        </UHStack>
        <Stack gap={1}>
          <StyledText maxLine={2} variant="articleH4">
            {media.title}
          </StyledText>
          <StyledText maxLine={2} variant="articleH6">
            {media.description}
          </StyledText>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default KetagalanMediaCard
