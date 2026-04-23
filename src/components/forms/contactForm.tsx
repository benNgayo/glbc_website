"use client";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

import {
  contactFormSchema,
  ContactFormSchema,
} from "../../lib/formValidationSchema";
import { submitForm } from "../../lib/actions";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const ContactForm = () => {
  const [token, setToken] = useState("");
  const { handleSubmit, control, reset } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    console.log("SUBMIT FIRED", data);

    if (!token) {
      toast.error("Please complete verification");
      return;
    }

    const res = await submitForm({
      ...data,
      turnstileToken: token,
    });

    if (res.success) {
      toast.success("Message sent!");
      reset();
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Get in touch</CardTitle>
        </CardHeader>
        <CardContent>
          <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="flex justify-between gap-4">
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id="contact-first-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="First Name"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="lastName"
                  control={control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        id="contact-last-name"
                        aria-invalid={fieldState.invalid}
                        placeholder="Last Name"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      id="contact-phone"
                      aria-invalid={fieldState.invalid}
                      placeholder="07XX XXX XXX "
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      id="contact-email"
                      aria-invalid={fieldState.invalid}
                      placeholder="Email"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <InputGroup>
                      <InputGroupTextarea
                        {...field}
                        id="contact-message"
                        placeholder="Tell us what course you're interested in and any questions you have...."
                        rows={6}
                        className="min-h-24 resize-none"
                        aria-invalid={fieldState.invalid}
                      />
                      <InputGroupAddon align="block-end">
                        <InputGroupText className="tabular-nums">
                          {field.value.length}/500 characters
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field
            orientation="horizontal"
            className="justify-end hover:cursor-pointer"
          >
            <Button type="button" variant="outline" onClick={() => reset()}>
              Reset
            </Button>
            <Button type="submit" form="contact-form">
              Submit
            </Button>
          </Field>
        </CardFooter>
        <div className="flex justify-center scale-90  sm:scale-100">
          {/* TURNSTILE */}
          <Turnstile
            siteKey="0x4AAAAAADBNaodgUKJ9_fGw"
            onLoad={() => console.log("TURNSTILE LOADED")}
            onError={(err) => console.log("TURNSTILE ERROR", err)}
            onSuccess={(token: string) => setToken(token)}
            options={{ size: "normal" }}
          />

          {/* send token to backend */}
          <input type="hidden" name="cf-turnstile-response" value={token} />
        </div>
      </Card>
    </div>
  );
};

export default ContactForm;
