import { Posts } from "@prisma/client";

interface PostProps {
  title: string;
  summary?: string;
  description: string;
}

export const PostCard = ({
  title,
  summary,
  description,
}: Pick<Posts, "summary" | "description" | "title">) => {
  //   const description1 = JSON.parse(description);
  return (
    <div>
      <p>{title}</p>
      <p>{summary}</p>
      <p>{description}</p>
    </div>
  );
};
