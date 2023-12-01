import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { format } from "date-fns";
import Image from "next/image";

interface PostPageProps {
  params: { postId: string };
}

const PostPage = async ({ params }: PostPageProps) => {
  const user = await currentUser();
  const post = await db.posts.findFirst({
    where: {
      id: params.postId,
    },
  });

  return (
    <div className="flex justify-center items-center">
      <Card className="flex flex-col justify-start  h-screen p-2 items-center max-w-3xl">
        <CardHeader>
          <CardTitle className="text-5xl font-bold">{post?.title}</CardTitle>
          <CardDescription className="text-xl mb-3">{post?.summary}</CardDescription>
          <div className="flex items-center gap-2 space-x-1 my-2">
            <Avatar className="h-8 w-8">
              {user?.imageUrl ? (
                <Image src={user?.imageUrl} alt="profile picture" fill referrerPolicy="no-referrer" />
              ) : null}
            </Avatar>
            <p className="text-lg text-black">{post?.username} · </p>
            <span className="text-zinc-600 text-sm"> {format(new Date(post?.createdAt!), "MMM dd")}</span>
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
