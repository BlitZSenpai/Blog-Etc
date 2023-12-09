"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { navbarProps } from "./navbaritems";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Github, Linkedin } from "lucide-react";

export const UserNavbar = ({ imageUrl, name, email }: navbarProps) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-10 w-10 aspect-square bg-zinc-400">
          <Avatar className="relative h-10 w-10">
            {imageUrl ? (
              <Image src={imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
            ) : null}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5">
            {name && <p className="text-sm text-black font-medium">{name}</p>}
            {email && <p className="truncate w-[200px] text-sm text-zinc-700">{email}</p>}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href={`/${name.toLocaleLowerCase()}/posts`}>
            Your posts
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link className="cursor-pointer" href={"/home/create-post"}>
            Create post
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <p className="w-full cursor-pointer pl-2.5">
            <SignOutButton signOutCallback={() => router.push("/")}>Log out</SignOutButton>
          </p>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="hover:bg-none">
          <div className="flex gap-2">
            <Link
              target="_blank"
              className="cursor-pointer hover:bg-zinc-300 p-0.5"
              href={"https://www.linkedin.com/in/koushik-yemula/"}>
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              className="cursor-pointer hover:bg-zinc-300 p-0.5"
              href={"https://github.com/BlitZSenpai"}>
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
