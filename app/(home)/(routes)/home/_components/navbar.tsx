import { Logo } from "@/components/logo";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="w-full flex fixed top-0 bg-background justify-between p-6 px-10 border-b border-b-black">
      <Logo />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
