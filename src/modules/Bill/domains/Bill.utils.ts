import { z } from 'zod'

export const billSchema = z.object({
  id: z.string(),
})
