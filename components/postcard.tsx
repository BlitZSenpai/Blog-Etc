"use client";

import { Posts } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Ban, MoreHorizontal, StopCircle, StopCircleIcon, Trash } from "lucide-react";
import { deletePost } from "@/lib/actions/deletepost";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const PostCard = ({
  title,
  summary,
  id,
  username,
  createdAt,
  imageUrl,
  currentUsername,
}: Pick<Posts, "summary" | "title" | "id" | "username" | "createdAt" | "imageUrl"> & {
  currentUsername: string;
}) => {
  const router = useRouter();

  return (
    <div className="p-3 flex flex-col h-full max-w-3xl w-full items-start justify-center mt-2 border-b-[1px] bg-background">
      <div className="flex w-full mb-2 items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Link href={`/${username}/posts`} className="flex flex-row gap-2 items-center hover:cursor-pointer">
            <Avatar className="h-8 w-8">
              {imageUrl ? (
                <Image src={imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
              ) : null}
            </Avatar>
            <h3 className="text-lg hover:underline capitalize">{username}</h3>
          </Link>
          <span className="text-sm"> ·</span>
          <span className="text-zinc-600 text-sm"> {format(new Date(createdAt), "MMM dd")}</span>
        </div>
        <div className="ml-auto flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation} asChild>
              <Button
                variant="ghost"
                className=" h-full hover:text-zinc-950 text-zinc-600  ml-auto rounded-sm">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {username === currentUsername ? (
                <DropdownMenuItem
                  onClick={() => {
                    deletePost(id);
                    router.refresh();
                  }}>
                  <p className="flex hover:cursor-pointer w-full">
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                  </p>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem className="flex w-full items-center hover:cursor-pointer">
                  <Ban className="h-4 w-4 mr-1.5" /> Not interested
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Link href={`/${username.toLocaleLowerCase()}/post/${id}`}>
        <div className="pb-2 pl-1">
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p className="overflow-hidden  text-ellipsis line-clamp-2 leading-[24px] m-0 break-words">
            {summary}
          </p>
        </div>
      </Link>
    </div>
  );
};
