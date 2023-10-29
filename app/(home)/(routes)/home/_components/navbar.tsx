import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";
import { CreateButton } from "./createbutton";

export const Navbar = () => {
  return (
    <div className="w-full flex fixed top-0 bg-background justify-between p-6 px-20 border-b border-b-black">
      <Logo />
      <div className="flex justify-end space-x-3">
        <CreateButton />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
