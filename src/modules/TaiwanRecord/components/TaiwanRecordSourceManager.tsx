import { memo, useCallback, useState } from 'react'
import { Controller, FieldPath, Control } from 'react-hook-form'
import { Box, Button, Chip, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import LinkIcon from '@mui/icons-material/Link'
import {
  TaiwanRecordCreateInput,
  TaiwanRecordUpdateInput,
  LENGTH_CONSTRAINTS,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { z } from 'zod'

interface TaiwanRecordSourceManagerProps {
  control: Control<TaiwanRecordCreateInput | TaiwanRecordUpdateInput>
  fieldName: FieldPath<TaiwanRecordCreateInput | TaiwanRecordUpdateInput>
}

const TaiwanRecordSourceManager = memo(function TaiwanRecordSourceManager(
  props: TaiwanRecordSourceManagerProps
) {
  const { control, fieldName } = props
  const { t } = useTranslationClient(['taiwan_record'])
  const [inputUrl, setInputUrl] = useState('')
  const [urlError, setUrlError] = useState('')

  const maxSources = LENGTH_CONSTRAINTS.sources

  const handleAddSource = useCallback(
    (currentSources: string[]) => {
      setUrlError('')

      if (!inputUrl.trim()) {
        setUrlError(t('form.sources.error.empty', { ns: 'taiwan_record' }))
        return
      }

      if (!z.string().url().safeParse(inputUrl).success) {
        setUrlError(t('form.sources.error.invalid', { ns: 'taiwan_record' }))
        return
      }

      if (currentSources.includes(inputUrl)) {
        setUrlError(t('form.sources.error.duplicate', { ns: 'taiwan_record' }))
        return
      }

      if (currentSources.length >= maxSources) {
        setUrlError(
          t('form.sources.error.maxReached', {
            max: maxSources,
            ns: 'taiwan_record',
          })
        )
        return
      }

      setInputUrl('')
      return [...currentSources, inputUrl]
    },
    [inputUrl, maxSources, t]
  )

  const handleRemoveSource = useCallback(
    (currentSources: string[], index: number) => {
      setUrlError('')
      return currentSources.filter((_, i) => i !== index)
    },
    []
  )

  const canAddMore = (sources: string[]) => sources.length < maxSources

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => (
        <Box>
          <Typography variant="body2" fontWeight={600} mb={1}>
            {t('form.sources.label', { ns: 'taiwan_record' })}
            {!canAddMore((field.value as string[]) || []) && (
              <Typography
                component="span"
                variant="caption"
                sx={{ ml: 1, color: 'text.secondary' }}
              >
                (
                {t('form.sources.maxReached', {
                  max: maxSources,
                  ns: 'taiwan_record',
                })}
                )
              </Typography>
            )}
          </Typography>

          <Stack gap={2}>
            {/* 輸入框和新增按鈕 */}
            <Stack direction="row" gap={1}>
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
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const newSources = handleAddSource(field.value as string[])
                    if (newSources) {
                      field.onChange(newSources)
                    }
                  }
                }}
                disabled={!canAddMore((field.value as string[]) || [])}
                error={!!urlError}
                helperText={urlError}
                color="info"
              />
              <Button
                variant="contained"
                size="small"
                disabled={!canAddMore((field.value as string[]) || [])}
                onClick={() => {
                  const newSources = handleAddSource(field.value as string[])
                  if (newSources) {
                    field.onChange(newSources)
                  }
                }}
                sx={{ textTransform: 'none', minWidth: 'fit-content' }}
                color="info"
              >
                <AddIcon sx={{ mr: 0.5 }} fontSize="small" />
                {t('form.sources.add.btn', { ns: 'taiwan_record' })}
              </Button>
            </Stack>

            {/* 已登錄的連結列表 */}
            {(field.value as string[])?.length > 0 && (
              <Stack gap={1}>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  {t('form.sources.count', {
                    current: (field.value as string[]).length,
                    max: maxSources,
                    ns: 'taiwan_record',
                  })}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {(field.value as string[]).map((source, index) => (
                    <Chip
                      key={index}
                      icon={<LinkIcon />}
                      label={source}
                      onDelete={() => {
                        field.onChange(
                          handleRemoveSource(field.value as string[], index)
                        )
                      }}
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
