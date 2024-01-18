"use server";

import { Button } from "@/components/ui/button";
import { SignInButton, auth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = async () => {
  const { userId } = auth();

  return (
    <div className="flex justify-between gap-y-4 md:px-32 px-12 py-36 relative">
      <div className="max-w-3xl space-y-5 flex-col  justify-center">
        <h1 className="font-bold md:text-8xl sm:text-6xl text-7xl leading-0 pb-1">Stay curious.</h1>
        <h2 className="sm:text-xl md:text-2xl text-xl font-medium">
          Discover stories, thinking, and expertise <br className="hidden md:block" />
          from writers on any topic.
        </h2>
        {userId && (
          <div>
            <Link href="/home">
              <Button size="lg" className="mt-2 text-lg">
                Start reading <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        )}
        {!userId && (
          <div>
            <SignInButton mode="modal">
              <Button size="lg" className="mt-2 text-lg">
                Get started
              </Button>
            </SignInButton>
          </div>
        )}
      </div>
      <div className="absolute right-36 top-14">
        <Image src="/hero.svg" height="450" width="450" alt="text" className="hidden xl:block" />
      </div>
    </div>
  );
};

export default LandingPage;
