'use client'

import UButton from '@/common/components/atoms/UButton'
import UCategoryTag from '@/common/components/atoms/UCategoryTag'
import UHashTag from '@/common/components/atoms/UHashTag'
import UHStack from '@/common/components/atoms/UHStack'
import { styled } from '@/common/lib/mui/theme'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'
import { Bill } from '@/modules/Bill/classes/Bill'
import { CONGRESS_CURRENT_SESSION_MOCK } from '@/modules/Bill/data'
import { Stack, Typography } from '@mui/material'
import { memo } from 'react'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'

const StyledInfoContainer = styled(Stack)(() => ({
  flex: 1,
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

interface BillInfoSectionProps {
  bill: Bill
}

const BillInfoSection = memo(function BillInfoSection({
  bill,
}: BillInfoSectionProps) {
  return (
    <UHStack spacing={2}>
      {/** Info */}
      <StyledInfoContainer spacing={2}>
        <UHStack spacing={2} alignItems="center">
          {bill.tags?.[0] && (
            <UCategoryTag
              value={bill.tags[0]}
              containerProps={{
                borderRadius: '6px',
                sx: {
                  py: 0.5,
                  px: 1,
                },
              }}
            />
          )}
          <Typography variant="body" fontWeight={300} mb={1}>
            {`${bill.chamberPrefix}${bill.id} | ${CONGRESS_CURRENT_SESSION_MOCK}th Congress (2023-2024)`}
          </Typography>
        </UHStack>
        <Typography variant="h4">{bill.title}</Typography>
        <Stack direction="row" gap={1} flexWrap="wrap">
          {bill.tags?.map((tag) => <UHashTag key={tag} value={tag} />)}
        </Stack>
      </StyledInfoContainer>

      {/** Actions */}
      <UHStack spacing={2}>
        <StyledLinkButton
          variant="contained"
          startIcon={<AccessTimeOutlinedIcon width={24} height={24} />}
          rounded
        >
          Title Version
        </StyledLinkButton>
        <StyledSubscribeButton
          variant="contained"
          color="primary"
          rounded
          startIcon={<BookmarkBorderOutlinedIcon width={24} height={24} />}
        >
          Subscribe
        </StyledSubscribeButton>
      </UHStack>
    </UHStack>
  )
})

export default BillInfoSection
