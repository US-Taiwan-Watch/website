'use client'

import { memo } from 'react'
import { styled } from '@/common/lib/mui/theme'
import { Box, Grid2 as Grid, Skeleton, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import PeopleCategory from '@/modules/People/components/PeopleCategory'
import PeopleCongressTitle from '@/modules/People/components/PeopleCongressTitle'
import PeopleTag from '@/modules/People/components/PeopleTag'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import UIconButton from '@/common/components/atoms/UIconButton'
import Link from 'next/link'
import UHeightLimitedText from '@/common/components/atoms/UHeightLimitedText'
import UTagList from '@/common/components/atoms/UTagList'
import { People, PeopleUtils } from '@/modules/People/business/People'
import UHStack from '@/common/components/atoms/UHStack'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'
import { ArrowTopRightIcon } from '@/common/styles/assets/Icons'

const StyledPeopleCardContainer = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  borderRadius: '15px',
  backgroundColor: theme.color.common.white,
  border: `1px solid ${theme.color.grey[1600]}`,
}))

const StyledPeopleCardImageContainer = styled(Box)(() => ({
  position: 'relative',
  borderRadius: '15px',
  overflow: 'hidden',
}))

const StyledPeopleCardImage = styled(Image)(() => ({
  width: '100%',
  height: '100%', // 設置為自動高度
  objectFit: 'cover',
}))

const StyledPeopleCardDescription = styled(UHeightLimitedText)(({ theme }) => ({
  fontWeight: 400,
  color: theme.color.grey[1500],
}))

const StyledPeopleCardIconButton = styled(UIconButton)(({ theme }) => ({
  '& svg': {
    color: theme.color.neutral[500],
  },
}))

interface PeopleCardProps {
  people: People
  /**
   * 是否為簡化版
   */
  simplified?: boolean
  /**
   * 是否為熱門議員
   */
  isPopular?: boolean
}

const PeopleCard = memo(function PeopleCard({
  people,
  simplified = false,
  isPopular = false,
}: PeopleCardProps) {
  const { isMobile } = useResponsive()

  return (
    <StyledPeopleCardContainer
      sx={{
        padding: {
          xs: 1,
          sm: 1.5,
          md: 2.5,
        },
      }}
    >
      <Stack
        direction="row"
        gap={{
          xs: 1.5,
          md: 3,
        }}
        height="100%"
      >
        {people.image && (
          <StyledPeopleCardImageContainer
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              width: {
                xs: isPopular ? 80 : 60,
                sm: isPopular ? 100 : 80,
                md: isPopular ? 130 : 100,
                lg: isPopular ? 160 : 100,
              },
              minHeight: {
                xs: isPopular ? 100 : 80,
                sm: isPopular ? 130 : 100,
                md: isPopular ? 150 : 130,
                lg: isPopular ? 200 : 130,
              },
            }}
          >
            <StyledPeopleCardImage
              src={people.image}
              alt={people.name || ''}
              fill
            />
          </StyledPeopleCardImageContainer>
        )}
        <Grid container direction="row" flex={1}>
          <Grid size={10}>
            <Stack
              direction="column"
              spacing={{
                xs: 0.75,
                md: 2,
              }}
            >
              <PeopleCategory people={people} />
              <Stack
                gap={{
                  xs: 0.5,
                  md: 1,
                }}
              >
                <Typography
                  fontSize={{
                    xs: '1.25rem',
                    md: '1.625rem',
                  }}
                  lineHeight={1}
                  fontWeight={600}
                >
                  {people.name}
                </Typography>
                {people.congressExperienceRange && (
                  <PeopleCongressTitle
                    congressExperienceRange={people.congressExperienceRange}
                  />
                )}
              </Stack>
              {!simplified && (
                <StyledPeopleCardDescription maxLine={2} fontWeight={400}>
                  {people.description}
                </StyledPeopleCardDescription>
              )}

              <UTagList
                tags={people.tags.map((tag) => (
                  <PeopleTag key={tag.id} value={tag.name} />
                ))}
                containerProps={{
                  gap: 2,
                }}
                maxTags={2}
              />
            </Stack>
          </Grid>
          <Grid
            size={2}
            display="flex"
            justifyContent="end"
            alignItems="flex-start"
          >
            <Link href={PeopleUtils.getLink(people.id)}>
              <StyledPeopleCardIconButton variant="rounded" color="inherit">
                {isMobile ? <ArrowTopRightIcon /> : <ArrowForwardIcon />}
              </StyledPeopleCardIconButton>
            </Link>
          </Grid>
        </Grid>
      </Stack>
    </StyledPeopleCardContainer>
  )
})

export default PeopleCard

export const PeopleCardSkeleton = () => {
  return (
    <StyledPeopleCardContainer
      sx={{
        padding: {
          xs: 1,
          sm: 2.5,
        },
      }}
    >
      <UHStack
        gap={{
          xs: 1,
          sm: 3,
        }}
        height={'100%'}
      >
        <Skeleton
          variant="rounded"
          sx={{
            height: {
              xs: 100,
              sm: 150,
            },
            width: {
              xs: 60,
              sm: 100,
            },
          }}
        />
        <Stack
          height={{
            xs: 100,
            sm: 150,
          }}
          flexGrow={1}
          gap={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <Skeleton variant="rounded" height={24} width={'100%'} />
          <Skeleton
            variant="rounded"
            sx={{
              flex: 1,
            }}
            width={'100%'}
          />
          <Skeleton variant="rounded" height={24} width={'100%'} />
        </Stack>
      </UHStack>
    </StyledPeopleCardContainer>
  )
}
