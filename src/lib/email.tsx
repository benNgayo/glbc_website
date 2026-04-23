import { ContactFormSchema } from "./formValidationSchema";

export function ContactEmail({
  firstName,
  lastName,
  phone,
  email,
  message,
}: ContactFormSchema) {
  return (
    <div>
      <h1>New Contact Message</h1>
      <p>Name: {firstName + " " + lastName}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </div>
  );
}

export default ContactEmail;
