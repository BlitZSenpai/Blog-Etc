"use client";

import { Button } from "@/components/ui/button";
import { deletePost } from "@/lib/actions/deletepost";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => {
        deletePost(id);
        router.refresh();
      }}
      className=" p-2 w-full flex items-center justify-start">
      <Trash className="h-4 w-4 mr-2" />
      Delete
    </Button>
  );
};
