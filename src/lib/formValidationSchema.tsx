import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  phone: z.string().min(10, "Phone number must be at least 10 digits long"),
  email: z.email("Invalid email address"),
  message: z.string().max(500, "Message must be less than 500 characters long"),
  // turnstileToken: z.string().min(1, "Verification required"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
