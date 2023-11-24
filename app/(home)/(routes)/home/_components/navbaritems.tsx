"use client";

import { UserButton } from "@clerk/nextjs";
import { CreateButton } from "./createbutton";
import { usePathname } from "next/navigation";
import { PostButton } from "./postbutton";

export const NavbarItems = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/home" && <CreateButton />}
      {pathname === "/home/create-post" && <PostButton />}
      <UserButton afterSignOutUrl="/" />
    </>
  );
};
