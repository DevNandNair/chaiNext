import {z} from 'zod'


export const  usernameValidation = z
.string()
.min(2,"username must be atleast two charecters")
.max(20,"username must be 20  charectors maximum")
.regex(/^[a-zA-Z0-9_]+$/ ,"username must not contain special charector")



export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message:'invalid email address'}),
    password: z.string().min(6,{message:"atleast 6 charecters required"})
})