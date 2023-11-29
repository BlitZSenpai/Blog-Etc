import { Logo } from "@/components/logo";
import Link from "next/link";
import { NavbarItems } from "./navbaritems";
import { currentUser } from "@clerk/nextjs";

export const Navbar = async () => {
  const user = await currentUser();
  return (
    <div className="w-full flex top-0 bg-background justify-between p-6 px-20 border-b border-b-black">
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
  );
};
