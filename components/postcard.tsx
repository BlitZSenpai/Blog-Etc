import { DeleteButton } from "@/app/(home)/(routes)/_components/delete-button";
import { Posts } from "@prisma/client";
import { format } from "date-fns";
import { Ban, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Views } from "./views";

export const PostCard = ({
  title,
  summary,
  id,
  username,
  createdAt,
  imageUrl,
  currentUsername,
  slug,
}: Pick<Posts, "summary" | "title" | "id" | "username" | "createdAt" | "imageUrl"> & {
  currentUsername: string;
  slug: string;
}) => {
  return (
    <div className="p-3 flex flex-col h-full max-w-3xl w-full items-start justify-center mt-2 border-b-[1px] bg-background">
      <div className="flex w-full mb-2 items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Link href={`/${username}/posts`} className="flex flex-row gap-2 items-center hover:cursor-pointer">
            <Avatar className="h-8 w-8">
              {imageUrl ? (
                <Image src={imageUrl} alt="profile picture" fill sizes="auto" referrerPolicy="no-referrer" />
              ) : null}
            </Avatar>
            <h3 className="text-lg hover:underline capitalize">{username}</h3>
          </Link>
          <span className="text-sm"> ·</span>
          <span className="text-zinc-600 text-sm"> {format(new Date(createdAt), "MMM dd")}</span>
        </div>
        <div className="ml-auto flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className=" h-full hover:text-zinc-950 text-zinc-600  ml-auto rounded-sm">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {username === currentUsername ? (
                <DropdownMenuItem asChild>
                  <DeleteButton id={id} />
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
          <p className="overflow-hidden text-ellipsis line-clamp-2 leading-[24px] m-0 break-words">
            {summary}
          </p>
        </div>
      </Link>
      <div className="ml-1">
        <Views slug={slug} />
      </div>
    </div>
  );
};
