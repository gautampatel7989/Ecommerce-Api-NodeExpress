import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2),
  description: z.string().optional(),
  price: z.number().positive(),
});

export const updateProductSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
});
