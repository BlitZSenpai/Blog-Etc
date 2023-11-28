import { PostCard } from "@/components/postcard";
import { userPosts } from "@/lib/actions/userposts";

interface YourPostsPageProps {
  params: { user: string };
}

const YourPostsPage = async ({ params }: YourPostsPageProps) => {
  const posts = await userPosts({ username: params.user });

  const post = posts.map((post) => (
    <PostCard key={post.id} title={post.title} description={post.description} summary={post.summary} />
  ));

  return <div>{post}</div>;
};

export default YourPostsPage;
