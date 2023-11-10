import * as z from "zod";

export const UserValidation = z.object({
    
    id: z
      .string().min(1, {message: "This field has to be filled"}),
      
    name: z
      .string()
      .min(3, { message: "Minimum 3 characters." })
      .max(30, { message: "Maximum 30 caracters." }),
    email: z
      .string()
      .min(1, { message: "This field has to be filled." })
			.email("This is not a valid email.")
      .max(1000, { message: "Maximum 1000 caracters." }),
  });
