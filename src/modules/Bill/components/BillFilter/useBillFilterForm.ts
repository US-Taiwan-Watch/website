import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  billFilterSchema,
  type BillFilterInput,
} from '@/modules/Bill/components/BillFilter/schema'

export default function useBillFilterForm() {
  const form = useForm<BillFilterInput>({
    resolver: zodResolver(billFilterSchema),
    defaultValues: {},
    mode: 'onSubmit',
  })

  const handleReset = useCallback(() => {
    form.reset({
      category: undefined,
    })
  }, [form])

  const handleSecondLevelReset = useCallback(() => {
    form.reset({
      category: form.getValues('category'),
    })
  }, [form])

  return { form, handleReset, handleSecondLevelReset }
}
