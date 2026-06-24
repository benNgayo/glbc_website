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

export const admissionFormSchema = z.object({
  // step 1 Personal Information
  surName: z.string().min(2, "Surname must be at least 2 characters long"),
  firstName: z.string().min(2, "First name must be at least 2 characters long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters long"),
  dateOfBirth: z.coerce.date({ message: "Invalid date format" }),
  gender: z.enum(["Male", "Female"], { message: "Please select a gender" }),
  countryOfResidence: z
    .string()
    .min(2, "Country of residence must be at least 2 characters long"),
  idNumber: z.string().min(5, "ID number must be at least 5 characters long"),
  maritalStatus: z.enum(["Single", "Married", "Divorced", "Widowed"], {
    message: "Please select a marital status",
  }),

  // step 2 Contact Information
  phone: z
    .string()
    .regex(/^2547\d{8}$/)
    .min(10, "Phone number must be at least 10 digits long"),
  email: z.email("Invalid email address"),
  postalAddress: z
    .string()
    .min(5, "Postal address must be at least 5 characters long"),
  nextOfKinName: z
    .string()
    .min(2, "Next of kin name must be at least 2 characters long"),
  nextOfKinRelationship: z
    .string()
    .min(2, "Next of kin relationship must be at least 2 characters long"),
  nextOfKinPhone: z
    .string()
    .min(10, "Next of kin phone number must be at least 10 digits long"),

  // step 3 Church Information
  churchName: z
    .string()
    .min(2, "Church name must be at least 2 characters long"),
  churchPosition: z
    .string()
    .min(2, "Church position must be at least 2 characters long"),

  // step 4 Academic Information
  highestEducationLevel: z.enum(
    ["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "PhD"],
    { message: "Please select your highest education level" },
  ),
  institutionName: z
    .string()
    .min(2, "Institution name must be at least 2 characters long"),
  countryOfInstitution: z
    .string()
    .min(2, "Country of institution must be at least 2 characters long"),
  courseOfStudy: z
    .string()
    .min(2, "Course of study must be at least 2 characters long"),
  yearStrarted: z.coerce
    .number()
    .min(1900, "Start year must be after 1900")
    .max(new Date().getFullYear(), `Start year cannot be in the future`),
  graduationYear: z.coerce
    .number()
    .min(1900, "Graduation year must be after 1900")
    .max(new Date().getFullYear(), `Graduation year cannot be in the future`),
  transcript: z
    .instanceof(File, { message: "Transcript file is required" })
    .refine((file) => file.type === "application/pdf", {
      message: "Transcript must be a PDF file",
    }),

  // step 5 Program Selection
  program: z.enum(
    [
      "Bachelor in Bible and Theology",
      "Diploma in Bible and Theology",
      "Certificate in Bible and Theology",
      "Diploma in Music",
      "Certificate in Music",
    ],
    { message: "Please select a program" },
  ),
});

export type AdmissionFormSchema = z.infer<typeof admissionFormSchema>;
