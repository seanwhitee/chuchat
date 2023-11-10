import * as z from "zod";

export const ChatRoomValidation = z.object({
    id: z  
        .string().min(1, {message: "This field has to be filled."}),

    roomName: z
        .string()
        .min(3, { message: "This field has to be filled." })
        .max(30, { message: "Maximum 30 caracters." }),

    userId: z
        .string(),

    createAt: z
        .date()

    
})

export const PromptValidation = z.object({
    id: z
        .string().min(1, {message: "This field has to be filled."}),
        
    prompt: z
        .string().min(1, {message: "This field has to be filled."}),

    userId: z
        .string().min(1, {message: "This field has to be filled"}),

    createAt: z
        .date()
})

export const ResponseValidation = z.object({
    id: z
        .string().min(1, {message: "This field has to be filled."}),
        
    response: z
        .string(),

    promptId: z
        .string().min(1, {message: "This field has to be filled"}),

    createAt: z
        .date(),

    botType: z
        .string().min(1, {message: "Must have bot type."})
})
