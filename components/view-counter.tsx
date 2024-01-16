import { Count } from "@/types/types";

interface Props {
  slug: string;
  allViews: Count | null;
  trackView?: boolean;
}

export const ViewCounter = ({ slug, allViews }: Props) => {
  const number = allViews?.[slug] || 0;

  return (
    <p className="gap-2 text-sm text-muted-foreground">
      <span>{number.toLocaleString()} Views</span>
    </p>
  );
};
