import { PostCard } from "@/components/postcard";
import { userPosts } from "@/lib/actions/userposts";

interface YourPostsPageProps {
  params: { user: string };
}

const YourPostsPage = async ({ params }: YourPostsPageProps) => {
  const posts = await userPosts({ username: params.user });

  const post = posts.map((post) => (
    <PostCard
      imageUrl={post.imageUrl}
      username={post.username}
      createdAt={post.createdAt}
      key={post.id}
      id={post.id}
      title={post.title}
      summary={post.summary}
    />
  ));

  return (
    <div className="bg-background flex flex-col w-full overflow-scroll justify-center items-center">
      {post}
    </div>
  );
};

export default YourPostsPage;
