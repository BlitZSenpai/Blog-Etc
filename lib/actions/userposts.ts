"use server";

import { db } from "../prismadb";

export const userPosts = async ({ username }: { username: string }) => {
  const posts = await db.posts.findMany({
    where: {
      username,
    },
  });

  return posts;
};
