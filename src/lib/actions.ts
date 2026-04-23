"use server";
import { ContactFormSchema, contactFormSchema } from "./formValidationSchema";
import { ContactEmail } from "./email";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function submitForm(
  formData: ContactFormSchema & { turnstileToken: string },
) {
  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, error: result.error };
  }

  const verify = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET!,
        response: formData.turnstileToken,
      }),
    },
  );

  const turnstile = await verify.json();
  if (!turnstile.success) {
    return { success: false, error: "Bot verification failed" };
  }

  await resend.emails.send({
    from: "Admissions <admissions@glbc.co.ke>",
    to: "ngayobenedict7@gmail.com",
    subject: "New Contact Form Submission",
    react: ContactEmail(result.data),
  });
  return { success: true };
}
