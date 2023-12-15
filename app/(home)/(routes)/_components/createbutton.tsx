import Image from "next/image";
import Link from "next/link";

export const CreateButton = () => {
  return (
    <div className="hover:opacity-70">
      <Link href="/home/create-post">
        <Image className="mr-2" src="/create.svg" alt="create" height="35" width="35" />
      </Link>
    </div>
  );
};
