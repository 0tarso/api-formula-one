import { z } from "zod"

export const DriverSchema = z.object({
  id: z.number(),
  name: z.string(),
  country: z.string(),
  team: z.string(),
  age: z.number(),
})

export const UpdateDriverSchema = z.object({
  name: z.string(),
  country: z.string(),
  team: z.string(),
  age: z.number(),
})

export const PartialUpdateDriverSchema = UpdateDriverSchema.partial().strict()

