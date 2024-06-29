import { UserNavbar } from "@/app/(home)/(routes)/_components/usernavbar";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

import Link from "next/link";

export const LandingNavbar = async () => {
  const user = await currentUser();
  return (
    <div className="fixed top-0 flex items-center w-full p-6 px-10 border-b bg-background md:px-32 border-slate-200">
      {!!user ? (
        <Link href="/home">
          <Logo />
        </Link>
      ) : (
        <Logo />
      )}
      <div className="flex items-center justify-end w-full md:ml-auto md:justify-end gap-x-2">
        {!!user && user.username ? (
          <div className="flex items-center gap-2 md:justify-between">
            <Link href="/home">
              <Button variant="outline" className="mr-2">
                Enter Wrapped
              </Button>
            </Link>
            <UserNavbar
              name={user.username}
              imageUrl={user.imageUrl}
              email={user.emailAddresses[0].emailAddress}
            />
          </div>
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
