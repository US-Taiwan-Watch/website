import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  defaultCategory,
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
    defaultValues: initialValues ?? {},
    mode: 'onSubmit',
  })

  // useEffect(() => {
  //   if (initialValues) {
  //     form.reset(initialValues)
  //   }
  // }, [form, initialValues])

  const category = form.watch('category')

  useEffect(() => {
    console.log('category', category)
  }, [category])

  useEffect(() => {
    console.log(form.getValues())
  }, [form])

  const handleReset = useCallback(() => {
    form.reset({
      category: defaultCategory,
    })
  }, [form])

  const handleSecondLevelReset = useCallback(() => {
    form.reset({
      category: form.getValues('category'),
    })
  }, [form])

  return { form, category, handleReset, handleSecondLevelReset }
}
