import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const PostButton = () => {
  return (
    <>
      <Button type="submit" size="sm" className="pl-4 border-black" variant="outline">
        <p>Post</p>
        <ArrowRight className="w-4 h-4 ml-0.5" />
      </Button>
    </>
  );
};
