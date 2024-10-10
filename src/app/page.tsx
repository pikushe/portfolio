import BottomCard from "@/components/BottomCard";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-2 h-full max-w-[640px]">
        <MyProjects />
        <BottomCard />
      </div>

    </div>
  );
}
