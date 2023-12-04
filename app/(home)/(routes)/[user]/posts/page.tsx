import { PostCard } from "@/components/postcard";
import { userPosts } from "@/lib/actions/userposts";
import { currentUser } from "@clerk/nextjs";

interface YourPostsPageProps {
  params: { user: string };
}

const YourPostsPage = async ({ params }: YourPostsPageProps) => {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

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
      currentUsername={user?.username!}
    />
  ));

  return <div className="p-5 flex flex-col overflow-scroll justify-center items-center w-full">{post}</div>;
};

export default YourPostsPage;
