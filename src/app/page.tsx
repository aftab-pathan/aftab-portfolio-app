import DotPattern from "@/components/magicui/dot-pattern";
import MainContent from "./_components/MainContent";
import SidebarInfo from "./_components/SidebarInfo";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex flex-col md:flex-row justify-around items-center h-[100vh] w-[100vw] bg-black text-white">
        <SidebarInfo />
        <MainContent />
      </div>
      <BackgroundBeams />
    </div>
  );
}
