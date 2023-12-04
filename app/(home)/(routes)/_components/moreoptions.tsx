"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deletePost } from "@/lib/actions/deletepost";
import { Ban, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface MoreOptionsProps {
  postUsername: string;
  currentUsername: string;
  postId: string;
}

export const MoreOptions = ({ postUsername, currentUsername, postId }: MoreOptionsProps) => {
  const router = useRouter();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation} asChild>
          <Button variant="ghost" className=" h-full hover:text-zinc-950 text-zinc-600  ml-auto rounded-sm">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-white">
          {postUsername === currentUsername ? (
            <DropdownMenuItem
              onClick={() => {
                deletePost(postId);
                router.refresh();
                router.push(`/${postUsername}/posts`);
              }}>
              <p className="flex hover:cursor-pointer">
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </p>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem className="flex items-center hover:cursor-pointer">
              <Ban className="h-4 w-4 mr-1.5" /> Not interested
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
