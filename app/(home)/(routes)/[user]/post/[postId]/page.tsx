import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns";
import Image from "next/image";
import { MoreOptions } from "../../../_components/moreoptions";
import Link from "next/link";

interface PostPageProps {
  params: { postId: string };
}

const PostPage = async ({ params }: PostPageProps) => {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  const post = await db.posts.findFirst({
    where: {
      id: params.postId,
    },
  });

  if (!post) throw new Error("No posts found!");

  return (
    <div className="flex flex-col justify-center items-center m-auto">
      <Card className="flex flex-col justify-start w-full  h-screen p-2 items-start max-w-3xl">
        <CardHeader className="my-1 space-y-3">
          <CardTitle className="text-5xl font-bold w-fit flex">
            {post?.title}
            <span>
              <MoreOptions postUsername={post.username} currentUsername={user.username!} postId={post.id} />
            </span>
          </CardTitle>
          <CardDescription className="text-xl mb-5">{post?.summary}</CardDescription>
          <div className="flex items-center text-center gap-1 space-x-1">
            <Link
              href={`/${post.username}/posts`}
              className="flex flex-row gap-2 items-center hover:cursor-pointer">
              <Avatar className="h-8 w-8">
                {post?.imageUrl ? (
                  <Image src={post.imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
                ) : null}
              </Avatar>
              <p className="text-lg text-black hover:underline">{post?.username} </p>
            </Link>
            <span className="text-sm"> ·</span>
            <span className="text-zinc-600 flex items-center text-sm">
              {format(new Date(post?.createdAt!), "MMM dd")}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription>{post?.description}</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPage;
