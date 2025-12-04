import { memo, useCallback, useMemo } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  TaiwanRecordCreateInput,
  TaiwanRecordUpdateInput,
  MAX_IMAGE_COUNT,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

const TaiwanRecordImageUpload = memo(function TaiwanRecordImageUpload() {
  const { control } = useFormContext<
    TaiwanRecordCreateInput | TaiwanRecordUpdateInput
  >()
  const { t } = useTranslationClient(['taiwan_record'])
  const images = useWatch({ control, name: 'images' })

  const handleAddImages = useCallback(
    (files: FileList | null): Promise<string[]> => {
      return new Promise((resolve) => {
        if (!files) return resolve([])

        const newImages: string[] = []
        for (let i = 0; i < files.length; i++) {
          const file = files[i]
          if (file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
              if (e.target?.result) {
                newImages.push(e.target.result as string)
                if (i === files.length - 1) {
                  resolve(newImages)
                }
              }
            }
            reader.readAsDataURL(file)
          }
        }
      })
    },
    []
  )

  const getRemovedFilteredImages = useCallback(
    (currentImages: string[], index: number) => {
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
            <Box>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={async (e) => {
                  const uploadedImages = await handleAddImages(e.target.files)
                  const comprehensiveUploadedImages = [
                    ...(field.value || []),
                    ...uploadedImages,
                  ]
                  // 限制最多張數
                  field.onChange(
                    comprehensiveUploadedImages.slice(0, MAX_IMAGE_COUNT)
                  )
                }}
                style={{ display: 'none' }}
                id="image-upload-input"
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
                    <Box
                      key={index}
                      sx={{
                        position: 'relative',
                        aspectRatio: '1',
                        borderRadius: 1,
                        overflow: 'hidden',
                        backgroundColor: '#f5f5f5',
                        border: '1px solid #e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <img
                        src={image}
                        alt={`uploaded-${index}`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => {
                          if (!field.value) return
                          field.onChange(
                            getRemovedFilteredImages(field.value, index)
                          )
                        }}
                        sx={{
                          position: 'absolute',
                          top: -8,
                          right: -8,
                          backgroundColor: 'rgba(0, 0, 0, 0.6)',
                          '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                          },
                        }}
                      >
                        <DeleteIcon sx={{ color: 'white', fontSize: '1rem' }} />
                      </IconButton>
                    </Box>
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
