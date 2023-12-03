"use client";

import { Posts } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { MoreHorizontal, Trash } from "lucide-react";
import { deletePost } from "@/lib/actions/deletepost";

export const PostCard = ({
  title,
  summary,
  id,
  username,
  createdAt,
  imageUrl,
}: Pick<Posts, "summary" | "title" | "id" | "username" | "createdAt" | "imageUrl"> & {}) => {
  return (
    <div className="p-3 flex flex-col h-full max-w-3xl w-full items-start justify-center mt-2 border-b-[1px] bg-background">
      <div className="flex flex-row gap-2 mb-2  items-center">
        <Link
          href={`/${username}/posts`}
          className="flex flex-row gap-2 items-center hover:cursor-pointer justify-between">
          <Avatar className="h-8 w-8">
            {imageUrl ? (
              <Image src={imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
            ) : null}
          </Avatar>
          <h3 className="text-lg">{username} · </h3>
        </Link>
        <span className="text-zinc-600 text-sm"> {format(new Date(createdAt), "MMM dd")}</span>
        <div className="ml-auto flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger onClick={(e) => e.stopPropagation} asChild>
              <div role="button" className="hover:text-zinc-950 text-zinc-500 h-full ml-auto rounded-sm">
                <MoreHorizontal className="h-5 w-5" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuItem onClick={() => deletePost(id)}>
                <Trash className="h-4 w-4 mr-2" />
                Delete
              </DropdownMenuItem>
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
