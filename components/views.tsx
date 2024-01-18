import { getViewsCount } from "@/lib/actions/views";
import { ViewCounter } from "./view-counter";

interface ViewsProps {
  slug: string;
  cachedIncrement?: (slug: string) => Promise<number>;
}

export const Views = async ({ slug, cachedIncrement }: ViewsProps) => {
  const views = await getViewsCount();
  if (process.env.NODE_ENV !== "development") await cachedIncrement?.(slug);
  return <ViewCounter allViews={views} slug={slug} />;
};
