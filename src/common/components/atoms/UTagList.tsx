'use client'

import UCategoryTag, {
  UCategoryTagProps,
} from '@/common/components/atoms/UCategoryTag'
import UContentCard from '@/common/components/atoms/UContentCard'
import UContentCardDialog from '@/common/components/atoms/UContentCardDialog'
import UHStack from '@/common/components/atoms/UHStack'
import UIconButton from '@/common/components/atoms/UIconButton'
import useModal from '@/common/hooks/useModal'
import { StackProps, useTheme } from '@mui/material'
import { Fragment, ReactNode } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { USTWTheme } from '@/common/lib/mui/theme'

// NOTE: 預設顯示 5 個（mobile 3 個）
const DEFAULT_MAX_COUNT = 5

type Props = {
  tags: ReactNode[]
  maxTags?: number
  containerProps?: StackProps
  moreButtonProps?: UCategoryTagProps
}

export default function UTagList({
  tags,
  maxTags = DEFAULT_MAX_COUNT,
  containerProps,
  moreButtonProps,
}: Props) {
  const theme = useTheme<USTWTheme>()
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal()

  return (
    <>
      <UHStack
        alignItems="center"
        {...(tags.length > maxTags && {
          sx: {
            '.category-tag': {
              maxWidth: '100px',
            },
          },
        })}
        {...containerProps}
      >
        {tags.slice(0, maxTags).map((tag, index) => (
          <Fragment key={index}>{tag}</Fragment>
        ))}
        {tags.length > maxTags && (
          <UCategoryTag
            value={`+${tags.length - maxTags}More`}
            containerProps={{
              sx: {
                backgroundColor: 'transparent',
                color: theme.color.grey[600],
                px: 0.5,
              },
            }}
            {...moreButtonProps}
            onClick={handleOpenModal}
          />
        )}
      </UHStack>

      {isModalOpen && (
        <UContentCardDialog open={isModalOpen} onClose={handleCloseModal}>
          <UContentCard
            withHeader={true}
            headerProps={{
              title: 'Tags',
              action: (
                <UIconButton
                  variant="rounded"
                  color="inherit"
                  size="small"
                  onClick={handleCloseModal}
                >
                  <CloseIcon sx={{ color: theme.color.neutral[500] }} />
                </UIconButton>
              ),
            }}
            sx={{
              padding: 0,
              border: 'none',
              borderRadius: 0,
            }}
          >
            <UHStack
              gap={1}
              pt={3}
              pb={2}
              flexWrap="wrap"
              sx={{
                '.category-tag': {
                  maxWidth: 'unset',
                },
              }}
            >
              {tags.map((tag, index) => (
                <Fragment key={index}>{tag}</Fragment>
              ))}
            </UHStack>
          </UContentCard>
        </UContentCardDialog>
      )}
    </>
  )
}
