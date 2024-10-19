'use client'

import { ComponentProps, memo } from 'react'
import { Box, Stack, StackProps, useTheme } from '@mui/material'
import Image from 'next/image'
import { styled, USTWTheme } from '@/common/lib/mui/theme'
import UButton from '@/common/components/atoms/UButton'
import Link from 'next/link'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import withSelectable from '@/common/hooks/withSelectable'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UTagList from '@/common/components/atoms/UTagList'
import UWidthLimitedText from '@/common/components/atoms/UWidthLimitedText'

const StyledIndexKvCardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(2, 2, 2, 4),
  borderRadius: '30px',
}))

const StyledTag = styled(Box)(({ theme }) => ({
  borderRadius: '5px',
  border: `1px solid ${theme.color.common.black}`,
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
const StyledLeftSectionWithSelectable =
  withSelectable<StackProps>(StyledLeftSection)

const StyledMiddleSection = styled(Stack)(({ theme }) => ({
  margin: theme.spacing(4, 0),
}))

// TODO: 確認類型
interface IndexKvCardProps {
  containerSx?: ComponentProps<typeof StyledIndexKvCardContainer>['sx']
  tags: Array<string>
  title: string
  description: string
  image: string
  href: string
}

const IndexKvCard = memo(function IndexKvCard(props: IndexKvCardProps) {
  const theme = useTheme<USTWTheme>()

  return (
    <StyledIndexKvCardContainer sx={props.containerSx}>
      <Stack direction="row" spacing={8}>
        <StyledLeftSectionWithSelectable direction="column" spacing={4}>
          {/** Tags */}
          <UTagList
            tags={props.tags.map((tag, index) => (
              <StyledTag key={index} className="category-tag">
                <UWidthLimitedText variant="caption" component="p">
                  {tag}
                </UWidthLimitedText>
              </StyledTag>
            ))}
            containerProps={{
              gap: 1,
            }}
            moreButtonProps={{
              textProps: {
                sx: {
                  color: theme.color.neutral[500],
                },
              },
            }}
          />

          {/** Middle Section */}
          <StyledMiddleSection direction="column" spacing={2} flex={1}>
            <UHeightLimitedText maxLine={3} variant="h3" fontWeight={500}>
              {props.title}
            </UHeightLimitedText>
            <UHeightLimitedText maxLine={5} variant="body1">
              {props.description}
            </UHeightLimitedText>
          </StyledMiddleSection>

          {/** Learn More Button */}
          <Link href={props.href} style={{ width: 'fit-content' }}>
            <UButton
              variant="contained"
              color="info"
              rounded
              size="large"
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </UButton>
          </Link>
        </StyledLeftSectionWithSelectable>
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
