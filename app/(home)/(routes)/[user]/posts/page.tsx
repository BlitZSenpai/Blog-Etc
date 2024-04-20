import { PostCard } from "@/components/postcard";
import { Skeleton } from "@/components/ui/skeleton";
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

  // if (posts === null) {
  //   return (
  //     <div className="p-2 flex flex-col overflow-auto justify-center items-center w-full">
  //       {[...Array(5)].map((_, index) => (
  //         <div
  //           key={index}
  //           className="p-3 flex flex-col h-full max-w-3xl w-full items-start justify-center mt-2 border-b-[1px] bg-background">
  //           <div className="flex justify-between gap-2">
  //             <Skeleton className="h-14 w-[300px]" />
  //             <Skeleton className="h-14 w-[200px]" />
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

  if (posts === undefined)
    return (
      <div className="h-full w-full flex items-center justify-center">
        <Loader2 className="size-6 animate-spin transition-all" />
      </div>
    );

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
