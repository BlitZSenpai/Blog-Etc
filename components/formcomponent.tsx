"use client";

import { useForm } from "react-hook-form";
import { Form, FormField } from "./ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  title: z.string().min(1).max(50),
  summary: z.string().optional(),
  description: z.string(),
});

export const FormComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      summary: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit()} className="space-y-8">
        <FormField></FormField>
      </form> */}
    </Form>
  );
};
