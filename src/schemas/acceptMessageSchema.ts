import {z} from 'zod'


export const accecpMessageSchema = z.object({
    accecpMessage: z.boolean(),
})