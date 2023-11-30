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

  return <div>{post?.title}</div>;
};

export default PostPage;
