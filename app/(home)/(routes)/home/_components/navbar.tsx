"use server";

import { Logo } from "@/components/logo";
import { CurrentUser } from "@/lib/actions/createUser";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NavbarItems } from "./navbaritems";

export const Navbar = async () => {
  const User = await CurrentUser();

  if (!User) {
    redirect("/sign-in");
  }

  return (
    <div className="w-full flex fixed top-0 bg-background justify-between p-6 px-20 border-b border-b-black">
      <Link href="/home">
        <Logo />
      </Link>
      <div className="flex justify-end space-x-3">
        <NavbarItems />
      </div>
    </div>
  );
};
