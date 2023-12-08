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

export const formSchema = z.object({
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
    (editor: BlockNoteEditor) => {
      const description = JSON.stringify(editor.topLevelBlocks, null, 2);

      form.setValue("description", description);
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
      <form>
        <div className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    autoComplete="off"
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
              <FormItem className="-ml-10 w-full min-h-[40vh]">
                <FormLabel className="pl-[3.2rem] text-md">Description:</FormLabel>
                <FormControl>
                  <Editor onEditorChange={onEditorChange} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className="ml-3">
          <PostButton onClick={(...args) => form.handleSubmit(onSubmit)(...args)} />
        </div>
      </form>
    </Form>
  );
};
