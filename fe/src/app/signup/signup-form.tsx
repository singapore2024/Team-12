"use client";

import { useSignup } from "@/api/hooks/useAuth";
import { FormTextInput } from "@/components/form-inputs/form-text-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signupFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z.string().min(1, "Phone number is required"),
});

export type SignupFormValues = z.infer<typeof signupFormSchema>;

const defaultValues: SignupFormValues = {
  name: "",
  email: "",
  password: "",
  address: "",
  phoneNumber: "",
};

export default function SignupForm() {
  const signupMutation = useSignup();

  const form = useForm<SignupFormValues>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(signupFormSchema),
  });

  const handleSubmit = (values: SignupFormValues) => {
    signupMutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col space-y-4 w-[480px]"
      >
        <FormTextInput name="name" label="Name" form={form} />
        <FormTextInput name="email" label="Email" form={form} />
        <FormTextInput
          name="password"
          label="Password"
          inputProps={{
            type: "password",
          }}
          form={form}
        />
        <FormTextInput name="address" label="Address" form={form} />
        <FormTextInput name="phoneNumber" label="Phone Number" form={form} />
        <Button type="submit">Signup</Button>
      </form>
    </Form>
  );
}
