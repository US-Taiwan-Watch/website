import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  defaultPeopleFilterInput,
  peopleFilterSchema,
  type PeopleFilterInput,
} from '@/modules/People/components/PeopleFilter/schema'

export default function usePeopleFilterForm({
  initialValues,
}: {
  initialValues?: PeopleFilterInput
}) {
  const form = useForm<PeopleFilterInput>({
    resolver: zodResolver(peopleFilterSchema),
    defaultValues: initialValues ?? defaultPeopleFilterInput,
    mode: 'onSubmit',
  })

  const category = form.watch('category')

  const handleReset = useCallback(() => {
    form.reset(defaultPeopleFilterInput)
  }, [form])

  const handleSecondLevelReset = useCallback(() => {
    form.reset({
      category: form.getValues('category'),
    })
  }, [form])

  return { form, category, handleReset, handleSecondLevelReset }
}
