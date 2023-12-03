"use client";

import { PostButton } from "@/app/(home)/(routes)/_components/postbutton";
import { createPost } from "@/lib/actions/createpost";
import { BlockNoteEditor } from "@blocknote/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  title: z.string(),
  summary: z.string().optional(),
  description: z.string(),
});

export const FormComponent = ({ username }: { username: string }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const Editor = useMemo(() => dynamic(() => import("@/components/editor"), { ssr: false }), []);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      summary: "",
      description: "",
    },
  });

  const onEditorChange = useCallback(
    (blocknote: BlockNoteEditor) => {
      form.setValue("description", JSON.stringify(blocknote.topLevelBlocks, null, 2));
    },
    [form]
  );

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    const post = await createPost(data);

    router.push(`/${username}/post/${post.id}`);
    setIsSubmitting(false);
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
