import { PostCard } from "@/components/postcard";
import { userPosts } from "@/lib/actions/userposts";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface YourPostsPageProps {
  params: { user: string };
}

const YourPostsPage = async ({ params }: YourPostsPageProps) => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  const posts = (await userPosts({ username: params.user })).reverse();

  if (!posts) {
    throw new Error("Not found");
  }

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
      slug={post.id}
    />
  ));

  return <div className="p-2 flex flex-col overflow-auto justify-center items-center w-full">{post}</div>;
};

export default YourPostsPage;
