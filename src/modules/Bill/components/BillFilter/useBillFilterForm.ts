import { useCallback } from 'react'
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
    defaultValues: {
      category: undefined,
      congress: initialValues?.congress,
    },
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
