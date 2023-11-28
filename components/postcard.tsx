import { Posts } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

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
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};
