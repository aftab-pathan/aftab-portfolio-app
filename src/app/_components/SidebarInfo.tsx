import { MagicCard } from "@/components/magicui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SidebarInfo = () => {
  return (
    <MagicCard
      className="cursor-pointer flex-col items-center justify-start shadow-2xl whitespace-nowrap text-4xl bg-cardBg w-[90vw] h-[45vh] md:w-[30vw] md:h-[80vh]"
      gradientColor={"#D9D9D955"}
    >
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">footer</CardFooter>
    </MagicCard>
  );
};
export default SidebarInfo;
