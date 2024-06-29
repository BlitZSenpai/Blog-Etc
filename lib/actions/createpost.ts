"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../prismadb";

interface createPostProps {
  title: string;
  summary?: string;
  description: string;
}

export const createPost = async ({ title, summary, description }: createPostProps) => {
  const user = await currentUser();

  if (!user || !user.username) throw new Error("Unauthorized");

  const post = await db.posts.create({
    data: {
      username: user.username,
      clerkId: user.id,
      title,
      summary,
      description,
      imageUrl: user.imageUrl,
    },
  });

  return post;
};
