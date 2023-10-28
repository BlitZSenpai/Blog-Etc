import { LandingNavbar } from "./_components/navbar";

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <main className="h-full pt-20">{children}</main>
    </div>
  );
};

export default LandingPageLayout;
