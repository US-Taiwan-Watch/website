'use client'

import { KetagalanMedia } from '@/modules/KetagalanMedia/classes/KetagalanMedia'
import { USTWTheme, styled } from '@/common/lib/mui/theme'
import { Box, Stack, useTheme } from '@mui/material'
import Image from 'next/image'
import UHStack from '@/common/components/atoms/UHStack'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UTagList from '@/common/components/atoms/UTagList'
import Typography from '@mui/material/Typography'

const StyledImageContainer = styled(Box)(() => ({
  borderRadius: '7px',
  overflow: 'hidden',
  width: '100%',
  aspectRatio: '3/2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
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
  width: 'fit-content',
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
    <Stack width="100%" gap="20px">
      <StyledImageContainer>
        {media.image && (
          <StyledImage
            src={media.image}
            alt={media.title || ''}
            width={380}
            height={200}
            layout="responsive"
            style={{
              objectFit: 'cover',
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
        )}
      </StyledImageContainer>
      <Stack gap="10px">
        <UTagList
          tags={(media.tags ?? []).map((tag, index) => (
            <StyledTag key={index} className="category-tag">
              <Typography
                variant="bodyS"
                fontWeight={500}
                color={theme.color.wheat[200]}
                whiteSpace="nowrap"
              >
                {tag}
              </Typography>
            </StyledTag>
          ))}
          containerProps={{
            gap: 1,
          }}
          hideWiderThanContainer
        />

        <Stack gap={1}>
          <StyledText maxLine={2} variant="articleH4">
            {media.title}
          </StyledText>
          <StyledText maxLine={3} variant="articleH6">
            {media.description}
          </StyledText>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default KetagalanMediaCard
