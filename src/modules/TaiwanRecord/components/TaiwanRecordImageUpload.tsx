import { memo, useCallback, useMemo, useState } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Box, Button, Stack, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import ClearIcon from '@mui/icons-material/Clear'
import {
  TaiwanRecordCreateInput,
  TaiwanRecordUpdateInput,
  MAX_IMAGE_COUNT,
  TaiwanRecord,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import UIconButton from '@/common/components/atoms/UIconButton'
import { useTheme } from '@mui/material/styles'
import { USTWTheme } from '@/common/lib/mui/theme'
import Image from 'next/image'

type PreviewImageProps = {
  image: string
  index: number
  onRemove: () => void
  isReadOnly?: boolean
}

const PreviewImage = memo(function PreviewImage({
  image,
  index,
  onRemove,
  isReadOnly = false,
}: PreviewImageProps) {
  const theme = useTheme<USTWTheme>()
  const [showRemoveButton, setShowRemoveButton] = useState(false)

  return (
    <Box
      sx={{
        position: 'relative',
        aspectRatio: '1',
        borderRadius: 1,
        overflow: 'visible',
        backgroundColor: '#f5f5f5',
        border: '1px solid #e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onMouseEnter={() => !isReadOnly && setShowRemoveButton(true)}
      onMouseLeave={() => !isReadOnly && setShowRemoveButton(false)}
    >
      <Image
        src={image}
        alt={`uploaded-${index}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        height={500}
        width={500}
      />
      {showRemoveButton && !isReadOnly && (
        <Box
          sx={{
            position: 'absolute',
            opacity: 0.8,
            width: '100%',
            height: '100%',
            backgroundColor: theme.color.grey[2300],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <UIconButton
            size="xs"
            variant="rounded"
            color="white"
            onClick={onRemove}
            sx={{
              p: 0.5,
              backgroundColor: theme.color.grey[1100],
            }}
          >
            <ClearIcon sx={{ width: 12, height: 12 }} />
          </UIconButton>
        </Box>
      )}
    </Box>
  )
})

type TaiwanRecordImageUploadProps = {
  isReadOnly?: boolean
}

const TaiwanRecordImageUpload = memo(function TaiwanRecordImageUpload({
  isReadOnly = false,
}: TaiwanRecordImageUploadProps) {
  const { control } = useFormContext<
    TaiwanRecordCreateInput | TaiwanRecordUpdateInput
  >()
  const { t } = useTranslationClient(['taiwan_record'])
  const images = useWatch({ control, name: 'images' })

  const handleAddImages = useCallback((files: FileList | null) => {
    if (!files) return Promise.resolve([])

    const imagePromises = Array.from(files)
      .filter((file) => file.type.startsWith('image/'))
      .map((file) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target?.result) {
              resolve(e.target.result as string)
            }
          }
          reader.onerror = () =>
            reject(new Error(`Failed to read ${file.name}`))
          reader.readAsDataURL(file)
        })
      })

    return Promise.allSettled(imagePromises)
  }, [])

  const getRemovedFilteredImages = useCallback(
    (currentImages: TaiwanRecord['images'], index: number) => {
      return currentImages.filter((_, i) => i !== index)
    },
    []
  )

  const canAddMore = useMemo(
    () => images && images.length < MAX_IMAGE_COUNT,
    [images]
  )

  return (
    <Controller
      control={control}
      name="images"
      render={({ field }) => (
        <Box>
          <Typography variant="body2" fontWeight={600} mb={1}>
            {t('form.images.label', { ns: 'taiwan_record' })}
            {!canAddMore && (
              <Typography
                component="span"
                variant="caption"
                sx={{ ml: 1, color: 'text.secondary' }}
              >
                (
                {t('form.images.maxReached', {
                  max: MAX_IMAGE_COUNT,
                  ns: 'taiwan_record',
                })}
                )
              </Typography>
            )}
          </Typography>

          <Stack gap={2}>
            {/* 上傳按鈕 */}
            {!isReadOnly && (
              <Box>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={async (e) => {
                    const uploadedImages = await handleAddImages(e.target.files)
                    const comprehensiveUploadedImages = [
                      ...(field.value || []),
                      ...uploadedImages
                        .filter((image) => image.status === 'fulfilled')
                        .map((image) => ({
                          id: TaiwanRecordUtils.generateRandomMongoDBId(),
                          url: image.value,
                        })),
                    ]
                    // 限制最多張數
                    field.onChange(
                      comprehensiveUploadedImages.slice(0, MAX_IMAGE_COUNT)
                    )
                  }}
                  style={{ display: 'none' }}
                  id="image-upload-input"
                  disabled={!canAddMore}
                />
                <label htmlFor="image-upload-input" style={{ width: '100%' }}>
                  <Button
                    component="span"
                    variant="outlined"
                    startIcon={<CloudUploadIcon />}
                    disabled={!canAddMore}
                    fullWidth
                    sx={{ textTransform: 'none' }}
                    color="info"
                  >
                    {t('form.images.upload.btn', { ns: 'taiwan_record' })}
                  </Button>
                </label>
              </Box>
            )}

            {/* 已上傳的圖片列表 */}
            {field.value && field.value.length > 0 && (
              <Stack gap={1}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {t('form.images.count', {
                    current: field.value.length || 0,
                    max: MAX_IMAGE_COUNT,
                    ns: 'taiwan_record',
                  })}
                </Typography>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                    gap: 1,
                  }}
                >
                  {field.value.map((image, index) => (
                    <PreviewImage
                      key={index}
                      image={image.url}
                      index={index}
                      isReadOnly={isReadOnly}
                      onRemove={() => {
                        if (!field.value) return
                        field.onChange(
                          getRemovedFilteredImages(field.value, index)
                        )
                      }}
                    />
                  ))}
                </Box>
              </Stack>
            )}
          </Stack>
        </Box>
      )}
    />
  )
})

export default TaiwanRecordImageUpload
