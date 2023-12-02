import { PostCard } from "@/components/postcard";
import { db } from "@/lib/prismadb";
import { currentUser } from "@clerk/nextjs";

const HomePage = async () => {
  const user = await currentUser();

  if (!user) return null;
  const posts = await db.posts.findMany();

  return (
    <div className="p-5 flex flex-col overflow-scroll justify-center items-center w-full">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          id={post.id}
          summary={post.summary}
          createdAt={post.createdAt}
          imageUrl={user?.imageUrl}
          username={post.username}
        />
      ))}
    </div>
  );
};

export default HomePage;
