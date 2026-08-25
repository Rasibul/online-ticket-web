import { z } from "zod";


export const registerSchema = z.object({

    username:z
        .string()
        .min(3,"Username minimum 3 characters"),


    email:z
        .string()
        .email("Invalid email"),


    phone:z
        .string()
        .min(10,"Invalid phone number"),


    password:z
        .string()
        .min(8,"Password minimum 8 characters")

});