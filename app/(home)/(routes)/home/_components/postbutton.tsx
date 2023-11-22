import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const PostButton = () => {
  return (
    <div className="flex mr-4">
      <Link href="/home">
        <Button size="sm" className="pl-4 border-black" variant="outline">
          <p>Post</p>
          <ArrowRight className="w-4 h-4 ml-0.5" />
        </Button>
      </Link>
    </div>
  );
};
