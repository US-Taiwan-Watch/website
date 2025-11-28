import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import {
  TaiwanRecord,
  TaiwanRecordCreateOutput,
  TaiwanRecordUpdateOutput,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'
import {
  Dialog,
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  TextField,
  CircularProgress,
  Stack,
  Typography,
} from '@mui/material'
import { useMemo, useCallback, useState } from 'react'
import useTaiwanRecordForm, {
  TaiwanRecordFormMode,
} from '@/modules/TaiwanRecord/hooks/useTaiwanRecordForm'
import { Controller } from 'react-hook-form'
import TaiwanRecordImageUpload from './TaiwanRecordImageUpload'
import TaiwanRecordSourceManager from './TaiwanRecordSourceManager'

type TaiwanRecordDialogProps = DialogProps & {
  mode: TaiwanRecordFormMode
  record?: TaiwanRecord
}

export default function TaiwanRecordDialog(props: TaiwanRecordDialogProps) {
  const { mode, record, ...dialogProps } = props
  const { t } = useTranslationClient(['taiwan_record', 'common'])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { form, handleReset, handleSubmit } = useTaiwanRecordForm({
    mode,
    record,
  })

  const title = useMemo(() => {
    return mode === 'create'
      ? t('dialog.create.title', { ns: 'taiwan_record' })
      : t('dialog.update.title', { ns: 'taiwan_record' })
  }, [mode, t])

  const onSubmit = useCallback(
    async (data: TaiwanRecordCreateOutput | TaiwanRecordUpdateOutput) => {
      setIsSubmitting(true)
      try {
        await handleSubmit(data)
      } finally {
        setIsSubmitting(false)
      }
    },
    [handleSubmit]
  )

  const onClose = useCallback(() => {
    if (!isSubmitting) {
      handleReset()
      dialogProps.onClose?.({}, 'backdropClick')
    }
  }, [isSubmitting, handleReset, dialogProps])

  return (
    <Dialog
      {...dialogProps}
      onClose={(_e, reason) => {
        // Prevent closing the dialog when clicking outside
        if (reason === 'backdropClick') return
        onClose()
      }}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{ pt: 2 }}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Stack gap={2}>
            {/* 標題欄位 */}
            <Controller
              control={form.control}
              name="title"
              rules={{
                required: t('form.required', { ns: 'common' }),
              }}
              render={({ field, fieldState: { error } }) => (
                <Box>
                  <Typography variant="body2" fontWeight={600} mb={1}>
                    {t('form.title.label', { ns: 'taiwan_record' })}
                  </Typography>
                  <TextField
                    {...field}
                    fullWidth
                    size="small"
                    error={!!error}
                    helperText={error?.message}
                    placeholder={t('form.title.placeholder', {
                      ns: 'taiwan_record',
                    })}
                    disabled={isSubmitting}
                    color="info"
                  />
                </Box>
              )}
            />

            {/* 內文欄位 */}
            <Controller
              control={form.control}
              name="content"
              rules={{
                required: t('form.required', { ns: 'common' }),
              }}
              render={({ field, fieldState: { error } }) => (
                <Box>
                  <Typography variant="body2" fontWeight={600} mb={1}>
                    {t('form.content.label', { ns: 'taiwan_record' })}
                  </Typography>
                  <TextField
                    {...field}
                    fullWidth
                    multiline
                    rows={5}
                    error={!!error}
                    helperText={error?.message}
                    placeholder={t('form.content.placeholder', {
                      ns: 'taiwan_record',
                    })}
                    disabled={isSubmitting}
                    color="info"
                  />
                </Box>
              )}
            />

            {/* 圖片上傳元件 */}
            <TaiwanRecordImageUpload
              control={form.control}
              fieldName="images"
            />

            {/* 連結管理元件 */}
            <TaiwanRecordSourceManager
              control={form.control}
              fieldName="sources"
            />
          </Stack>
        </Box>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button
          onClick={onClose}
          disabled={isSubmitting}
          sx={{ textTransform: 'none' }}
          color="info"
        >
          {t('cancel.btn', { ns: 'common' })}
        </Button>
        <Button
          onClick={form.handleSubmit(onSubmit)}
          variant="contained"
          color="info"
          disabled={isSubmitting}
          sx={{ textTransform: 'none' }}
        >
          {isSubmitting && (
            <CircularProgress size={16} sx={{ mr: 1 }} color="inherit" />
          )}
          {isSubmitting
            ? t('dialog.submitting.msg', { ns: 'taiwan_record' })
            : mode === 'create'
              ? t('dialog.create.btn', { ns: 'taiwan_record' })
              : t('dialog.update.btn', { ns: 'taiwan_record' })}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
