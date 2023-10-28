"use client";

import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center gap-y-4 md:px-32 p-16">
      <div className="max-w-3xl space-y-5">
        <h1 className="font-bold md:text-8xl sm:text-5xl text-3xl">Stay curious.</h1>
        <h2 className="text-base sm:text-xl md:text-2xl font-medium">
          Discover stories, thinking, and expertise <br />
          from writers on any topic
        </h2>
        <div>
          <Button size="sm">Start reading</Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
