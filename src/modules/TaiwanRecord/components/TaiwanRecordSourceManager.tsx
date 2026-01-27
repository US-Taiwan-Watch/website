import { memo, useCallback, useState } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import LinkIcon from '@mui/icons-material/Link'
import {
  TaiwanRecord,
  TaiwanRecordCreateInput,
  TaiwanRecordUpdateInput,
  TaiwanRecordUtils,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { z } from 'zod'
import { useResponsive } from '@/common/lib/responsive/ResponsiveProvider'

type TaiwanRecordSourceManagerProps = {
  isReadOnly?: boolean
}

const TaiwanRecordSourceManager = memo(function TaiwanRecordSourceManager({
  isReadOnly = false,
}: TaiwanRecordSourceManagerProps) {
  const { isMobile } = useResponsive()
  const { control } = useFormContext<
    TaiwanRecordCreateInput | TaiwanRecordUpdateInput
  >()
  const { t } = useTranslationClient(['taiwan_record'])
  const [inputUrl, setInputUrl] = useState('')
  const [urlError, setUrlError] = useState('')

  const sources = useWatch({ control, name: 'sources' })

  const handleAddSource = useCallback(() => {
    setUrlError('')

    if (!inputUrl.trim()) {
      setUrlError(t('form.sources.error.empty', { ns: 'taiwan_record' }))
      return
    }

    if (!z.string().url().safeParse(inputUrl).success) {
      setUrlError(t('form.sources.error.invalid', { ns: 'taiwan_record' }))
      return
    }

    if (new Set(sources?.map((source) => source.url))?.has(inputUrl)) {
      setUrlError(t('form.sources.error.duplicate', { ns: 'taiwan_record' }))
      return
    }

    setInputUrl('')
    return {
      id: TaiwanRecordUtils.generateRandomMongoDBId(),
      url: inputUrl,
    }
  }, [inputUrl, t, sources])

  const handleRemoveSource = useCallback(
    (currentSources: TaiwanRecord['sources'], index: number) => {
      setUrlError('')
      return currentSources.filter((_, i) => i !== index)
    },
    []
  )

  return (
    <Controller
      control={control}
      name="sources"
      render={({ field, fieldState: { error } }) => (
        <Box>
          <Typography variant="body2" fontWeight={600} mb={1}>
            {t('form.sources.label', { ns: 'taiwan_record' })}
          </Typography>

          <Stack gap={2}>
            {/* 輸入框和新增按鈕 */}
            {!isReadOnly && (
              <Stack direction="row" gap={1} alignItems="flex-start">
                <TextField
                  size="small"
                  fullWidth
                  placeholder={t('form.sources.input.placeholder', {
                    ns: 'taiwan_record',
                  })}
                  value={inputUrl}
                  onChange={(e) => {
                    setInputUrl(e.target.value)
                    setUrlError('')
                  }}
                  onKeyUp={(e) => {
                    if (!field.value) return
                    if (e.key === 'Enter') {
                      const newSource = handleAddSource()
                      if (!newSource) return
                      field.onChange([...(field.value || []), newSource])
                    }
                  }}
                  error={!!(urlError || error?.message)}
                  helperText={urlError || error?.message}
                  color="info"
                />
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    if (!field.value) return
                    const newSource = handleAddSource()
                    if (!newSource) return
                    field.onChange([...(field.value || []), newSource])
                  }}
                  sx={{
                    height: '40px',
                    textTransform: 'none',
                    minWidth: 'fit-content',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    borderRadius: {
                      xs: '100%',
                      sm: '8px',
                    },
                  }}
                  color="info"
                >
                  <AddIcon fontSize="small" />
                  {!isMobile && (
                    <span>
                      {t('form.sources.add.btn', { ns: 'taiwan_record' })}
                    </span>
                  )}
                </Button>
              </Stack>
            )}

            {/* 已登錄的連結列表 */}
            {field.value && field.value.length > 0 && (
              <Stack gap={1}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {t('form.sources.count', {
                    current: field.value.length,
                    ns: 'taiwan_record',
                  })}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {field.value.map((source, index) => (
                    <Chip
                      key={index}
                      icon={<LinkIcon />}
                      label={source.url}
                      onDelete={
                        isReadOnly
                          ? undefined
                          : () => {
                              if (!field.value) return
                              field.onChange(
                                handleRemoveSource(field.value, index)
                              )
                            }
                      }
                      variant="outlined"
                      size="small"
                      sx={{
                        maxWidth: '100%',
                        '& .MuiChip-label': {
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          maxWidth: '200px',
                        },
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

export default TaiwanRecordSourceManager
