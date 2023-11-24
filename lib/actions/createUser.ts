import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "../prismadb";

export const CurrentUser = async () => {
  const user = await currentUser();

  if (!user) {
    return redirectToSignIn();
  }

  const dbUser = await db.user.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (dbUser) {
    return dbUser;
  }

  const newUser = await db.user.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
    },
  });

  return newUser;
};
