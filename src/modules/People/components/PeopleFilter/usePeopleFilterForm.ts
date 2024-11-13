import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  peopleFilterSchema,
  type PeopleFilterInput,
} from '@/modules/People/components/PeopleFilter/schema'

export default function usePeopleFilterForm() {
  const form = useForm<PeopleFilterInput>({
    resolver: zodResolver(peopleFilterSchema),
    defaultValues: {
      category: '',
    },
    mode: 'onSubmit',
  })

  const category = form.watch('category')

  const handleReset = useCallback(() => {
    form.reset({
      category: '',
    })
  }, [form])

  const handleSecondLevelReset = useCallback(() => {
    form.reset({
      category: form.getValues('category'),
    })
  }, [form])

  return { form, category, handleReset, handleSecondLevelReset }
}
