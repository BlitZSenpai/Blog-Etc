import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <Image src="/logo.svg" alt="logo" width={35} height={34} />
      <p>Bob</p>
    </div>
  );
};
