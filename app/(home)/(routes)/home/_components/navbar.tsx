"use client";

import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import { CreateButton } from "./createbutton";
import { usePathname } from "next/navigation";
import { PostButton } from "./postbutton";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full flex fixed top-0 bg-background justify-between p-6 px-20 border-b border-b-black">
      <Logo />
      <div className="flex justify-end space-x-3">
        {pathname === "/home" && <CreateButton />}
        {pathname === "/home/create-post" && <PostButton />}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
