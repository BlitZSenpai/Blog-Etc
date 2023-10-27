"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export const LandingNavbar = () => {
  return (
    <>
      <SignUpButton mode="modal">
        <Button size="sm">Sign up</Button>
      </SignUpButton>
      <SignInButton mode="modal">
        <Button size="sm">Sign out</Button>
      </SignInButton>
    </>
  );
};
