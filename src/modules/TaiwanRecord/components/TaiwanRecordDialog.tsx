import useTranslationClient from '@/common/lib/i18n/hooks/useTranslationClient'
import { TaiwanRecord } from '@/modules/TaiwanRecord/business/TaiwanRecord'
import { Dialog, DialogProps, DialogTitle } from '@mui/material'
import { useMemo } from 'react'
import { TaiwanRecordFormMode } from '@/modules/TaiwanRecord/hooks/useTaiwanRecordForm'

type TaiwanRecordDialogProps = DialogProps & {
  mode: TaiwanRecordFormMode
  record?: TaiwanRecord
}

export default function TaiwanRecordDialog(props: TaiwanRecordDialogProps) {
  const { mode, ...dialogProps } = props
  const { t } = useTranslationClient(['taiwan_record'])

  const title = useMemo(() => {
    return mode === 'create'
      ? t('dialog.create.title', { ns: 'taiwan_record' })
      : t('dialog.update.title', { ns: 'taiwan_record' })
  }, [mode, t])

  return (
    <Dialog {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>
    </Dialog>
  )
}
