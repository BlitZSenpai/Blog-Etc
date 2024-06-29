export type Count = Record<string, number>;

export type Post = {
  id: string;
  title: string;
  summary?: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  username: string;
  imageUrl: string;
};
