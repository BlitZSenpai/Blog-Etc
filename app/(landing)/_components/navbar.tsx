"use server";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";
import { Logo } from "./logo";

export const LandingNavbar = () => {
  const { userId } = auth();
  return (
    <div className="w-full flex fixed top-0 bg-background items-center p-6 md:px-32 px-16 border-b border-b-black">
      <Logo />
      <div className="md:ml-auto md:justify-end justify-end  w-full flex items-center gap-x-2">
        {userId ? (
          <>
            <Button variant="ghost">Enter Bob</Button>
            <UserButton afterSignOutUrl="/" />
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
