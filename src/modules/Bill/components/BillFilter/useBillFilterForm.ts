import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  billFilterSchema,
  type BillFilterInput,
} from '@/modules/Bill/components/BillFilter/schema'

type Props = {
  initialValues?: BillFilterInput
}

export default function useBillFilterForm({ initialValues }: Props) {
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

  useEffect(() => {
    if (initialValues) {
      form.reset(initialValues)
    }
  }, [form, initialValues])

  return { form, handleReset }
}
