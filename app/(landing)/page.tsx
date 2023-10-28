"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";

const LandingPage = () => {
  return (
    <div className="flex justify-between gap-y-4 md:px-32 px-16 py-40 relative">
      <div className="max-w-3xl space-y-5 flex-col  justify-center">
        <h1 className="font-bold md:text-8xl sm:text-5xl text-3xl pb-1">Stay curious.</h1>
        <h2 className="text-base sm:text-xl md:text-2xl font-medium">
          Discover stories, thinking, and expertise <br />
          from writers on any topic
        </h2>
        <div>
          <SignInButton mode="modal">
            <Button size="lg" className="mt-2 text-lg">
              Start reading
            </Button>
          </SignInButton>
        </div>
      </div>
      <div className="flex items-start justify-start absolute top-20 right-44">
        <Image src="/text.svg" height="450" width="450" alt="text" />
      </div>
    </div>
  );
};

export default LandingPage;
