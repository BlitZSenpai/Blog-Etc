"use server";

import { db } from "../prismadb";

export const deletePost = async (postId: string) => {
  await db.posts.delete({
    where: {
      id: postId,
    },
  });
};
