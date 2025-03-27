import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  billFilterSchema,
  defaultBillFilterInput,
  type BillFilterInput,
} from '@/modules/Bill/components/BillFilter/schema'

type Props = {
  initialValues?: BillFilterInput
}

export default function useBillFilterForm({ initialValues }: Props) {
  const form = useForm<BillFilterInput>({
    resolver: zodResolver(billFilterSchema),
    defaultValues: initialValues ?? defaultBillFilterInput,
    mode: 'onSubmit',
  })

  const handleReset = useCallback(() => {
    form.reset(defaultBillFilterInput)
  }, [form])

  return { form, handleReset }
}
