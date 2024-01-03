import Editor from "@/components/editor";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { MoreOptions } from "../../../_components/moreoptions";
import { redirect } from "next/navigation";

interface PostPageProps {
  params: { postId: string };
}

const PostPage = async ({ params }: PostPageProps) => {
  const user = await currentUser();
  if (!user) redirect("/");

  const post = await db.posts.findFirst({
    where: {
      id: params.postId,
    },
  });

  if (!post) {
    redirect("/home");
  }

  return (
    <div className="flex flex-col justify-center items-center md:m-auto bg-background border-none">
      <Card className="flex flex-col justify-start w-full h-full md:p-2 items-start border-none max-w-3xl">
        <CardHeader className="my-1 w-full space-y-3">
          <CardTitle className="text-5xl font-bold w-full gap-2 leading-tight flex">{post?.title}</CardTitle>
          <CardDescription className="text-xl mb-5">{post?.summary}</CardDescription>
          <div className="flex items-center justify-between text-center gap-1 space-x-1">
            <div className="flex items-center  text-center gap-1 space-x-1">
              <Link
                href={`/${post.username}/posts`}
                className="flex flex-row gap-2 items-center hover:cursor-pointer">
                <Avatar className="h-10 w-10">
                  {post?.imageUrl ? (
                    <Image src={post.imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
                  ) : null}
                </Avatar>
                <p className="text-lg text-black hover:underline capitalize">{post?.username} </p>
              </Link>
              <span className="text-sm"> ·</span>
              <span className="text-zinc-600 flex items-center text-sm">
                {format(new Date(post?.createdAt!), "MMM dd")}
              </span>
            </div>
            <span>
              <MoreOptions postUsername={post.username} currentUsername={user.username!} postId={post.id} />
            </span>
          </div>
        </CardHeader>
        <CardContent className="relative w-full">
          <CardDescription className="absolute -left-6 overflow-hidden">
            <Editor editable={false} initialContent={post.description} />
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPage;
