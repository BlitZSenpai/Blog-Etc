"use server";

import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignUpButton, UserButton, auth } from "@clerk/nextjs";

export const LandingNavbar = () => {
  const { userId } = auth();
  return (
    <>
      {userId ? (
        <div className="flex items-center justify-end">
          <Button variant="ghost">Enter Bob</Button>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <div className="flex items-center justify-end">
          <SignUpButton mode="modal">
            <Button size="sm">Sign up</Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="sm">Sign in</Button>
          </SignInButton>
        </div>
      )}
    </>
  );
};
