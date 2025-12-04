import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback, useEffect, useMemo } from 'react'
import {
  defaultTaiwanRecordCreate,
  TaiwanRecordCreateInput,
  TaiwanRecordCreateOutput,
  TaiwanRecordUpdateInput,
  TaiwanRecordUpdateOutput,
  taiwanRecordUpdateSchema,
  taiwanRecordCreateSchema,
  defaultTaiwanRecordUpdate,
  TaiwanRecord,
} from '@/modules/TaiwanRecord/business/TaiwanRecord'

export type TaiwanRecordFormMode = 'create' | 'update'

type UseTaiwanRecordFormProps = {
  mode: TaiwanRecordFormMode
  taiwanRecord?: TaiwanRecord
}

export default function useTaiwanRecordForm(props: UseTaiwanRecordFormProps) {
  const { mode, taiwanRecord } = props

  const defaultValues = useMemo(() => {
    if (mode === 'update' && taiwanRecord) {
      return taiwanRecord
    }
    return mode === 'create'
      ? defaultTaiwanRecordCreate
      : defaultTaiwanRecordUpdate
  }, [mode, taiwanRecord])

  const form = useForm<TaiwanRecordCreateInput | TaiwanRecordUpdateInput>({
    resolver: zodResolver(
      mode === 'create' ? taiwanRecordCreateSchema : taiwanRecordUpdateSchema
    ),
    mode: 'onSubmit',
    defaultValues,
  })

  const handleReset = useCallback(() => {
    form.reset(defaultValues)
  }, [form, defaultValues])

  // 表單預設值變化時，更新表單，保持最新狀態
  useEffect(() => {
    form.reset(defaultValues)
  }, [form, defaultValues])

  const handleSubmit = useCallback(
    async (value: TaiwanRecordCreateOutput | TaiwanRecordUpdateOutput) => {
      console.log(value)
      // TODO: 呼教 API 新增/更新 Taiwan Record
    },
    []
  )

  return { form, handleReset, handleSubmit }
}
