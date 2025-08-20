import MyProjectsCard from "@/components/home/MyProjectsCard";
import ContactCard from "@/components/home/ContactCard";
import StackCard from "@/components/home/StackCard";
import HappyClientsCard from "@/components/home/HappyClientsCard";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row md:gap-3 h-full w-full">
            <div className="flex flex-col gap-3 h-full w-full">
                <MyProjectsCard />
                <div className="flex flex-row gap-3">
                    <ContactCard />
                    <HappyClientsCard />
                </div>
            </div>
            <div className="flex flex-col gap-3 w-full h-full">
                <StackCard />
            </div>
        </div>
    );
}
