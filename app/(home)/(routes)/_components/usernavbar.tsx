import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { navbarProps } from "./navbaritems";

export const UserNavbar = ({ imageUrl, name, email }: navbarProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-8 w-8 aspect-square bg-zinc-400">
          <Avatar className="relative h-8 w-8">
            {imageUrl ? (
              <Image src={imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
            ) : null}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5">
            {name && <p className="text-sm text-black font-medium">{name}</p>}
            {email && <p className="truncate w-[200px] text-sm text-zinc-700">{email}</p>}
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
