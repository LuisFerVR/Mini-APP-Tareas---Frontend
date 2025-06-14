import { z } from 'zod';

export const TasksResponseSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export const SuccessResponseSchema = z.object({
  message: z.string()
})

export const ErrorResponseSchema = z.object({
  message: z.array(z.string()),
  error: z.string(),
  statusCode: z.number()
})

export type Task = z.infer<typeof TasksResponseSchema>;