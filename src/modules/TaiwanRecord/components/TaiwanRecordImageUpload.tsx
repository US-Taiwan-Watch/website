import { memo, useCallback } from 'react'
import { Controller, FieldPath, Control } from 'react-hook-form'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  TaiwanRecordCreateInput,
  TaiwanRecordUpdateInput,
  LENGTH_CONSTRAINTS,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'

interface TaiwanRecordImageUploadProps {
  control: Control<TaiwanRecordCreateInput | TaiwanRecordUpdateInput>
  fieldName: FieldPath<TaiwanRecordCreateInput | TaiwanRecordUpdateInput>
}

const TaiwanRecordImageUpload = memo(function TaiwanRecordImageUpload(
  props: TaiwanRecordImageUploadProps
) {
  const { control, fieldName } = props
  const { t } = useTranslationClient(['taiwan_record'])

  const handleFileChange = useCallback(
    (currentImages: string[], files: FileList | null) => {
      if (!files) return currentImages

      const newImages: string[] = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (file.type.startsWith('image/')) {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target?.result) {
              newImages.push(e.target.result as string)
            }
          }
          reader.readAsDataURL(file)
        }
      }

      return [...currentImages, ...newImages]
    },
    []
  )

  const handleRemoveImage = useCallback(
    (currentImages: string[], index: number) => {
      return currentImages.filter((_, i) => i !== index)
    },
    []
  )

  const maxImages = LENGTH_CONSTRAINTS.images
  const canAddMore = (images: string[]) => images.length < maxImages

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => (
        <Box>
          <Typography variant="body2" fontWeight={600} mb={1}>
            {t('form.images.label', { ns: 'taiwan_record' })}
            {!canAddMore(field.value as string[]) && (
              <Typography
                component="span"
                variant="caption"
                sx={{ ml: 1, color: 'text.secondary' }}
              >
                (
                {t('form.images.maxReached', {
                  max: maxImages,
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
                onChange={(e) => {
                  const images = handleFileChange(
                    (field.value as string[]) || [],
                    e.target.files
                  )
                  // 限制最多張數
                  field.onChange(images.slice(0, maxImages))
                }}
                style={{ display: 'none' }}
                id="image-upload-input"
              />
              <label htmlFor="image-upload-input" style={{ width: '100%' }}>
                <Button
                  component="span"
                  variant="outlined"
                  startIcon={<CloudUploadIcon />}
                  disabled={!canAddMore((field.value as string[]) || [])}
                  fullWidth
                  sx={{ textTransform: 'none' }}
                  color="info"
                >
                  {t('form.images.upload.btn', { ns: 'taiwan_record' })}
                </Button>
              </label>
            </Box>

            {/* 已上傳的圖片列表 */}
            {(field.value as string[])?.length > 0 && (
              <Stack gap={1}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {t('form.images.count', {
                    current: (field.value as string[]).length,
                    max: maxImages,
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
                  {(field.value as string[]).map((image, index) => (
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
                          field.onChange(
                            handleRemoveImage(field.value as string[], index)
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
