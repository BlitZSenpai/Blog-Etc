import { PostCard } from "@/components/postcard";
import { userPosts } from "@/lib/actions/userposts";
import { currentUser } from "@clerk/nextjs";

interface YourPostsPageProps {
  params: { user: string };
}

const YourPostsPage = async ({ params }: YourPostsPageProps) => {
  const user = await currentUser();
  const posts = await userPosts({ username: params.user });

  const post = posts.map((post) => (
    <PostCard
      imageUrl={user?.imageUrl!}
      username={post.username}
      createdAt={post.createdAt}
      key={post.id}
      id={post.id}
      title={post.title}
      description={post.description}
      summary={post.summary}
    />
  ));

  return <div>{post}</div>;
};

export default YourPostsPage;
