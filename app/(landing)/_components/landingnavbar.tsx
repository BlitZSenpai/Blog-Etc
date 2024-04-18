import { UserNavbar } from "@/app/(home)/(routes)/_components/usernavbar";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export const LandingNavbar = async () => {
  const user = await currentUser();
  if (!user || !user.username) throw new Error("User not found");
  return (
    <div className="w-full flex fixed top-0 bg-background items-center p-6 md:px-32 px-10 border-b border-slate-200">
      {!!user ? (
        <Link href="/home">
          <Logo />
        </Link>
      ) : (
        <Logo />
      )}
      <div className="md:ml-auto md:justify-end justify-end  w-full flex items-center gap-x-2">
        {!!user ? (
          <div className="flex md:justify-between items-center gap-2">
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
