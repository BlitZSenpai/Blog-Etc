import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2 cursor-pointer hover:opacity-75">
      <Image src="/logo.svg" alt="logo" width={35} height={35} />
      <p className="text-lg font-semibold">Wrapped</p>
    </div>
  );
};
