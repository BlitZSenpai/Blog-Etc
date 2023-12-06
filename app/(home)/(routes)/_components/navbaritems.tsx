"use client";

import { CreateButton } from "./createbutton";
import { usePathname } from "next/navigation";
import { PostButton } from "./postbutton";
import { UserNavbar } from "./usernavbar";

export type navbarProps = {
  imageUrl?: string;
  name: string;
  email?: string;
};

export const NavbarItems = ({ imageUrl, name, email }: navbarProps) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      {pathname === "/home" && <CreateButton />}
      {pathname === "/home/create-post" && <PostButton />}
      <UserNavbar name={name} imageUrl={imageUrl} email={email} />
    </div>
  );
};
