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
import { AdmissionFormSchema } from "@/lib/formValidationSchema";
import { Controller, UseFormReturn } from "react-hook-form";

const PersonalInfo = ({
  form,
}: {
  form: UseFormReturn<AdmissionFormSchema>;
}) => {
  return (
    <div className="">
      <Card className="w-full sm:max-w-md">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <div className="flex justify-between gap-4">
              <Controller
                name="surName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <Input
                      {...field}
                      id="contact-first-name"
                      aria-invalid={fieldState.invalid}
                      placeholder="Surname"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="firstName"
                control={form.control}
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
                control={form.control}
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
          </FieldGroup>
        </CardContent>
        <CardFooter>
          <Field
            orientation="horizontal"
            className="justify-end hover:cursor-pointer"
          >
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="contact-form">
              Submit
            </Button>
          </Field>
        </CardFooter>
        <div className="flex justify-center scale-90  sm:scale-100"></div>
      </Card>
    </div>
  );
};

export default PersonalInfo;
