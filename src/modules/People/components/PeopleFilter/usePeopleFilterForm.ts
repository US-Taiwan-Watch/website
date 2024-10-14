import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  peopleFilterSchema,
  type PeopleFilterInput,
} from '@/modules/People/components/PeopleFilter/schema'
import { PeopleCategoryEnum } from '@/modules/People/components/PeopleFilter/enums'

export default function usePeopleFilterForm() {
  const form = useForm<PeopleFilterInput>({
    resolver: zodResolver(peopleFilterSchema),
    defaultValues: {
      category: PeopleCategoryEnum.Senator,
    },
    mode: 'all',
  })

  const category = form.watch('category')

  const handleReset = useCallback(() => {
    form.reset({
      category: form.getValues('category'),
    })
  }, [form])

  // First level selector: category 變化後，重設 form
  useEffect(() => {
    handleReset()
  }, [category, handleReset])

  return { form, category, handleReset }
}
