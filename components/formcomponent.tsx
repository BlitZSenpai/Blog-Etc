"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Editor from "./editor";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createPost } from "@/lib/actions/createpost";
import { Loader2 } from "lucide-react";
import { PostButton } from "@/app/(home)/(routes)/home/_components/postbutton";
import { BlockNoteEditor } from "@blocknote/core";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  title: z.string().min(1).max(50),
  summary: z.string().optional(),
  description: z.string(),
});

export const FormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      summary: "",
      description: "",
    },
  });

  const [client, setClient] = useState<boolean>(false);

  const onEditorChange = useCallback(
    (blocknote: BlockNoteEditor) => {
      form.setValue("description", JSON.stringify(blocknote.topLevelBlocks, null));
    },
    [form]
  );

  useEffect(() => setClient(true), []);
  if (!client) return null;

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    const post = await createPost(data);

    setIsSubmitting(false);

    router.push(`/post/${post.id}`);
  };

  if (isSubmitting) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Title"
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="resize-none border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Summarize your story"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={() => (
            <FormItem className="absolute left-0 w-full">
              <FormLabel className="pl-[3.2rem] text-md">Description:</FormLabel>
              <FormControl>
                <Editor onEditorChange={onEditorChange} />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="absolute -right-20 -bottom-52">
          <PostButton />
        </div>
      </form>
    </Form>
  );
};
