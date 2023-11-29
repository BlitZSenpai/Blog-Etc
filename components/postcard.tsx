import { Posts } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "./ui/avatar";
import { format } from "date-fns";

export const PostCard = ({
  title,
  summary,
  description,
  id,
  username,
  createdAt,
  imageUrl,
}: Pick<Posts, "summary" | "description" | "title" | "id" | "username" | "createdAt"> & {
  imageUrl: string;
}) => {
  //   const description1 = JSON.parse(description);
  return (
    <div className="p-3 flex flex-col max-w-2xl max-h-32 mt-2 border-b-2 bg-background">
      <Link href={`/post/${id}`}>
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
          <p className="truncate">{summary}</p>
        </div>
      </Link>
    </div>
  );
};
