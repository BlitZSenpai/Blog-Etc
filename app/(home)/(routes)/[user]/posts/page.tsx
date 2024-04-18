import { PostCard } from "@/components/postcard";
import { userPosts } from "@/lib/actions/userposts";
import { currentUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Your Posts",
  description: "Find your posts here!",
};

interface YourPostsPageProps {
  params: { user: string };
}

const YourPostsPage = async ({ params }: YourPostsPageProps) => {
  const user = await currentUser();
  if (!user || !user.username) redirect("/");

  const posts = (await userPosts({ username: params.user })).reverse();

  if (!posts) {
    throw new Error("Not found");
  }

  // if (posts === undefined)
  //   return (
  //     <div className="h-full w-full flex items-center justify-center">
  //       <Loader2 className="size-6 animate-spin transition-all" />
  //     </div>
  //   );

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
