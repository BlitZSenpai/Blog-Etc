import { PostCard } from "@/components/postcard";
import { db } from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Home",
  description: "Find all the posts here!",
};

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  const posts = (await db.posts.findMany()).reverse();

  if (!posts) {
    throw new Error("Not found");
  }

  return (
    <div className="p-2 flex flex-col overflow-auto justify-center items-center w-full">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          id={post.id}
          summary={post.summary}
          createdAt={post.createdAt}
          imageUrl={post.imageUrl}
          username={post.username}
          currentUsername={user?.username!}
          slug={post.id}
        />
      ))}
    </div>
  );
};

export default HomePage;
