"use server";

import { Button } from "@/components/ui/button";
import { SignInButton, auth } from "@clerk/nextjs";
import Image from "next/image";

const LandingPage = () => {
  const { userId } = auth();
  return (
    <div className="flex justify-between gap-y-4 md:px-32 px-16 py-40 relative">
      <div className="max-w-3xl space-y-5 flex-col  justify-center">
        <h1 className="font-bold md:text-8xl sm:text-6xl text-7xl pb-1">Stay curious.</h1>
        <h2 className="sm:text-xl md:text-2xl text-xl font-medium">
          Discover stories, thinking, and expertise <br />
          from writers on any topic
        </h2>
        {userId ? (
          <div>
            <Button size="lg" className="mt-2 text-lg">
              Start reading
            </Button>
          </div>
        ) : (
          <div>
            <SignInButton mode="modal">
              <Button size="lg" className="mt-2 text-lg">
                Get started
              </Button>
            </SignInButton>
          </div>
        )}
      </div>
      <div className="flex items-start justify-start absolute top-20 right-44">
        <Image src="/text.svg" height="450" width="450" alt="text" className="hidden lg:block" />
      </div>
    </div>
  );
};

export default LandingPage;
