import { Logo } from "@/components/logo";
import Link from "next/link";
import { NavbarItems } from "./navbaritems";
import { currentUser } from "@clerk/nextjs/server";

export const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="top-0 fixed inset-x-0 backdrop-blur-md z-10 border-b border-slate-200">
      <div className="w-full flex justify-between md:p-6 p-6 md:px-20 px-10 ">
        <Link href="/home">
          <Logo />
        </Link>
        <div className="flex justify-end space-x-3">
          <NavbarItems
            imageUrl={user?.imageUrl}
            email={user?.emailAddresses[0].emailAddress}
            name={`${user?.username}`}
          />
        </div>
      </div>
    </div>
  );
};
