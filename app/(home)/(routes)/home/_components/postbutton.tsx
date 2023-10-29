import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const PostButton = () => {
  return (
    <div className="flex">
      <Link href="/home">
        <Button size="sm" className="pl-4">
          <p className="mr-2">Post</p>
          <Image src="/post.svg" alt="post" width={13} height={13} />
        </Button>
      </Link>
    </div>
  );
};
