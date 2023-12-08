import { Button } from "@/components/ui/button";
import * as z from "zod";
import { ArrowRight } from "lucide-react";
import { formSchema } from "@/components/formcomponent";

interface PostButtonProps {
  onClick: () => Promise<void>;
}

export const PostButton = ({ onClick }: PostButtonProps) => {
  return (
    <>
      <Button onClick={onClick} size="sm" className="pl-4 border-black" variant="outline">
        <p>Post</p>
        <ArrowRight className="w-4 h-4 ml-0.5" />
      </Button>
    </>
  );
};
