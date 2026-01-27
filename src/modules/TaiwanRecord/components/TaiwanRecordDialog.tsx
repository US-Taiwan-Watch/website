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
import { Controller, FormProvider } from 'react-hook-form'
import TaiwanRecordImageUpload from '@/modules/TaiwanRecord/components/TaiwanRecordImageUpload'
import TaiwanRecordSourceManager from '@/modules/TaiwanRecord/components/TaiwanRecordSourceManager'
import useTaiwanRecord from '@/modules/TaiwanRecord/hooks/useTaiwanRecord'
import { useToast } from '@/common/providers/ToastProvider'
import UHStack from '@/common/components/atoms/UHStack'
import Link from 'next/link'
import useURouterClient from '@/common/lib/router/useURouterClient'
import { RouteName } from '@/common/lib/router/routes'

type TaiwanRecordDialogProps = DialogProps & {
  mode: TaiwanRecordFormMode
  peopleId: string
  taiwanRecord?: TaiwanRecord
  onSubmitTaiwanRecord?: () => void
}

export default function TaiwanRecordDialog(props: TaiwanRecordDialogProps) {
  const { resolveRouteUrl } = useURouterClient()
  const { mode, peopleId, taiwanRecord, onSubmitTaiwanRecord, ...dialogProps } =
    props
  const { t } = useTranslationClient(['taiwan_record', 'common'])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const { form, handleReset } = useTaiwanRecordForm({
    mode,
    taiwanRecord,
  })
  const {
    handleSubmitTaiwanRecord,
    handleUpdateTaiwanRecord,
    handleWithdrawTaiwanRecord,
  } = useTaiwanRecord()

  const title = useMemo(() => {
    if (mode === 'create') {
      return t('dialog.create.title', { ns: 'taiwan_record' })
    } else if (mode === 'update') {
      return t('dialog.update.title', { ns: 'taiwan_record' })
    } else {
      return t('dialog.view.title', { ns: 'taiwan_record' })
    }
  }, [mode, t])

  const onClose = useCallback(() => {
    if (!isSubmitting) {
      handleReset()
      dialogProps.onClose?.({}, 'backdropClick')
    }
  }, [isSubmitting, handleReset, dialogProps])

  const onSubmit = useCallback(
    async (data: TaiwanRecordCreateOutput | TaiwanRecordUpdateOutput) => {
      try {
        setIsSubmitting(true)
        if (mode === 'create') {
          await handleSubmitTaiwanRecord(peopleId, data)
          toast('success', t('submitTaiwanRecord.msg', { ns: 'taiwan_record' }))
        }
        if (mode === 'update' && taiwanRecord && 'id' in data) {
          await handleUpdateTaiwanRecord(data)
          toast('success', t('updateTaiwanRecord.msg', { ns: 'taiwan_record' }))
        }

        onClose()
        onSubmitTaiwanRecord?.()
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
          return
        }
        toast('error', t('submitTaiwanRecord.error', { ns: 'taiwan_record' }))
      } finally {
        setIsSubmitting(false)
      }
    },
    [
      taiwanRecord,
      peopleId,
      mode,
      handleSubmitTaiwanRecord,
      handleUpdateTaiwanRecord,
      onClose,
      toast,
      t,
      onSubmitTaiwanRecord,
    ]
  )

  const handleWithdraw = useCallback(
    async (id: string) => {
      try {
        setIsSubmitting(true)
        await handleWithdrawTaiwanRecord(id)
        toast('success', t('withdrawTaiwanRecord.msg', { ns: 'taiwan_record' }))

        onClose()
        onSubmitTaiwanRecord?.()
      } catch (error) {
        if (error instanceof Error) {
          toast('error', error.message)
          return
        }
        toast('error', t('withdrawTaiwanRecord.error', { ns: 'taiwan_record' }))
      } finally {
        setIsSubmitting(false)
      }
    },
    [handleWithdrawTaiwanRecord, onClose, toast, t, onSubmitTaiwanRecord]
  )

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
      PaperProps={{
        sx: {
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: '80dvh',
        },
      }}
    >
      <DialogTitle>
        <Stack>
          <UHStack justifyContent="space-between" alignItems="center">
            <Typography variant="h6">{title}</Typography>
            {taiwanRecord && (
              <Box
                sx={{
                  textAlign: 'center',
                  px: 1,
                  py: 0.5,
                  color: 'indigo.1000',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  borderRadius: '10px',
                  borderColor: 'indigo.1000',
                  borderWidth: 1,
                  borderStyle: 'solid',
                }}
              >
                <span>
                  {t(`taiwanRecord.status.${taiwanRecord.status}`, {
                    ns: 'taiwan_record',
                  })}
                </span>
              </Box>
            )}
          </UHStack>
          {peopleId && taiwanRecord?.people.name && (
            <Link
              href={resolveRouteUrl({
                name: RouteName.PeopleDetail,
                params: { peopleId },
              })}
              target="_blank"
            >
              <Typography
                variant="bodyS"
                fontWeight={600}
                color="grey.4200"
                sx={{ '&:hover': { textDecoration: 'underline' } }}
              >
                {taiwanRecord?.people.name}
              </Typography>
            </Link>
          )}
        </Stack>
      </DialogTitle>
      <DialogContent>
        <FormProvider {...form}>
          <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
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
                      {t('form.title.label', { ns: 'taiwan_record' })}{' '}
                      <Box component="span" color="error.main">
                        *
                      </Box>
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
                      slotProps={{
                        input: {
                          readOnly: mode === 'view',
                        },
                      }}
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
                      {t('form.content.label', { ns: 'taiwan_record' })}{' '}
                      <Box component="span" color="error.main">
                        *
                      </Box>
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
                      slotProps={{
                        input: {
                          readOnly: mode === 'view',
                        },
                      }}
                    />
                  </Box>
                )}
              />

              {/* 圖片上傳元件 */}
              <TaiwanRecordImageUpload isReadOnly={mode === 'view'} />

              {/* 連結管理元件 */}
              <TaiwanRecordSourceManager isReadOnly={mode === 'view'} />
            </Stack>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 2,
              }}
            >
              {mode !== 'create' && taiwanRecord && (
                <Button
                  onClick={() => handleWithdraw(taiwanRecord.id)}
                  disabled={isSubmitting}
                  sx={{ textTransform: 'none' }}
                  color="error"
                >
                  {t('dialog.withdraw.btn', { ns: 'taiwan_record' })}
                </Button>
              )}
              <UHStack gap={1} alignItems="center" ml="auto">
                <Button
                  onClick={onClose}
                  disabled={isSubmitting}
                  sx={{ textTransform: 'none' }}
                  color="info"
                >
                  {mode === 'view'
                    ? t('close.btn', { ns: 'common' })
                    : t('cancel.btn', { ns: 'common' })}
                </Button>
                {mode !== 'view' && (
                  <Button
                    type="submit"
                    variant="contained"
                    color="info"
                    disabled={isSubmitting}
                    sx={{ textTransform: 'none' }}
                  >
                    {isSubmitting && (
                      <CircularProgress
                        size={16}
                        sx={{ mr: 1 }}
                        color="inherit"
                      />
                    )}
                    {isSubmitting
                      ? t('dialog.submitting.msg', { ns: 'taiwan_record' })
                      : mode === 'create'
                        ? t('dialog.create.btn', { ns: 'taiwan_record' })
                        : t('dialog.update.btn', { ns: 'taiwan_record' })}
                  </Button>
                )}
              </UHStack>
            </Box>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  )
}
