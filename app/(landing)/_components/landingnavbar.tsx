import { UserNavbar } from "@/app/(home)/(routes)/_components/usernavbar";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export const LandingNavbar = async () => {
  const user = await currentUser();
  return (
    <div className="w-full flex fixed top-0 bg-background items-center p-6 md:px-32 px-16 border-b border-b-black">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-end  w-full flex items-center gap-x-2">
        {!!user ? (
          <>
            <Link href="/home">
              <Button variant="ghost">Enter Bob</Button>
            </Link>
            <UserNavbar
              name={user?.username!}
              imageUrl={user?.imageUrl}
              email={user?.emailAddresses[0].emailAddress}
            />
          </>
        ) : (
          <>
            <SignInButton mode="modal">
              <Button size="sm">Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">Register</Button>
            </SignUpButton>
          </>
        )}
      </div>
    </div>
  );
};
