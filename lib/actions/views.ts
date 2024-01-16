import { Count } from "@/types/types";
import { kv } from "@vercel/kv";
import { unstable_noStore as noStore } from "next/cache";

export const increment = async (slug: string): Promise<number> => {
  noStore();
  return await kv.hincrby("views", slug, 1);
};

export const getViewsCount = async (): Promise<Count | null> => {
  noStore();
  return await kv.hgetall("views");
};
