import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/lib/prismadb";

interface PostPageProps {
  params: { postId: string };
}

const PostPage = async ({ params }: PostPageProps) => {
  const post = await db.posts.findFirst({
    where: {
      id: params.postId,
    },
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold">{post?.title}</CardTitle>
        <CardDescription className="text-xl">{post?.summary}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription>{post?.description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PostPage;
