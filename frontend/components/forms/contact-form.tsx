"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

import { type ContactFormState } from "@/app/actions/contact-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/schemas/contact-form";

interface ContactFormProps {
  onSubmit: (formData: FormData) => Promise<ContactFormState>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState<ContactFormState>({});

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onSubmit",
  });

  async function handleAction(formData: FormData) {
    form.clearErrors();
    startTransition(async () => {
      const result = await onSubmit(formData);
      setFormState(result);

      if (result.success) {
        form.reset();
      } else if (result.errors) {
        const currentValues = form.getValues();
        Object.entries(result.errors).forEach(([key, message]) => {
          const fieldKey = key as keyof ContactFormValues;
          const fieldValue = currentValues[fieldKey];
          try {
            contactFormSchema.shape[fieldKey].parse(fieldValue);
          } catch {
            form.setError(fieldKey, {
              type: "server",
              message,
            });
          }
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form action={handleAction} className="space-y-6">
        {formState.success && (
          <div className="p-4 border border-green-500 bg-green-50 text-green-700 rounded-md">
            Message transmitted successfully
          </div>
        )}
        {formState.error && (
          <div className="p-4 border border-red-500 bg-red-50 text-red-700 rounded-md">
            {formState.error}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  First Name<sup className="ml-0.5">*</sup>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Last Name<sup className="ml-0.5">*</sup>
                </FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Your Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email Address<sup className="ml-0.5">*</sup>
              </FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Your Message<sup className="ml-0.5">*</sup>
              </FormLabel>
              <FormControl>
                <Textarea placeholder="How can we help you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? "Sending..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}
