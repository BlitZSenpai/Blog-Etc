import { Posts } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./ui/avatar";
import { format } from "date-fns";

export const PostCard = ({
  title,
  summary,
  id,
  username,
  createdAt,
  imageUrl,
}: Pick<Posts, "summary" | "title" | "id" | "username" | "createdAt"> & {
  imageUrl: string;
}) => {
  //   const description1 = JSON.parse(description);
  return (
    <Link
      href={`/${username.toLocaleLowerCase()}/post/${id}`}
      className="p-3 flex flex-col h-full max-w-3xl w-full items-start justify-center mt-2 border-b-[1px] bg-background">
      <div>
        <div className="flex flex-row gap-2 mb-2  items-center">
          <Avatar className="h-8 w-8">
            {imageUrl ? (
              <Image src={imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
            ) : null}
          </Avatar>
          <h3 className="text-lg">{username} · </h3>
          <span className="text-zinc-600 text-sm"> {format(new Date(createdAt), "MMM dd")}</span>
        </div>
        <div className="pb-2 pl-1">
          <h1 className="font-bold text-xl mb-2">{title}</h1>
          <p className="overflow-hidden  text-ellipsis line-clamp-2 leading-[24px] m-0 break-words">
            {summary}
          </p>
        </div>
      </div>
    </Link>
  );
};
