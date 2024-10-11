import {z} from 'zod'

export const messageSchema = z.object({
   content: z
   .string()
   .min(10,{message:"atleast 10 charecters are needed for messages"})
   .max(300,{message:"300 charecters maximum  for messages"})

})