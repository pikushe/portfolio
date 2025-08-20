import Image from "next/image";
import HappyClientsCard from "@/components/home/HappyClientsCard";

const skills = [
    { name: 'React', desc: '', icon: <Image src="/icon/react.svg" alt={"React.js"} height={24} width={24} /> },
    { name: 'Next.js', desc: '', icon: <Image src="/icon/nextjs.svg" alt={"Next.js"} height={24} width={24} /> },
    { name: 'Nestjs', desc: '', icon: <Image src="/icon/nestjs.svg" alt={"Nestjs"} height={24} width={24} /> },
    { name: 'Node.js', desc: '', icon: <Image src="/icon/nodejs.svg" alt={"Node.js"} height={24} width={24} /> },
    { name: 'Vuejs', desc: '', icon: <Image src="/icon/vue.svg" alt={"Vue.js"} height={24} width={24} /> },
    { name: 'Typescript', desc: '', icon: <Image src="/icon/typescript.svg" alt={"Typescript"} height={24} width={24} /> },
    { name: 'Mongo', desc: '', icon: <Image src="/icon/mongo.svg" alt={"MongoDB"} height={24} width={24} /> },
    { name: 'PostgreSQL', desc: '', icon: <Image src="/icon/postgresql.svg" alt={"PostgreSQL"} height={24} width={24} /> },
    { name: 'Docker', desc: '', icon: <Image src="/icon/docker.svg" alt={"Docker"} height={24} width={24} /> },
    { name: 'Git', desc: '', icon: <Image src="/icon/git.svg" alt={"Git"} height={24} width={24} /> },
    { name: 'Slack', desc: '', icon: <Image src="/icon/slack.svg" alt={"Slack"} height={24} width={24} /> },
    { name: 'Figma', desc: '', icon: <Image src="/icon/figma.svg" alt={"Figma"} height={24} width={24} /> },
    { name: 'Tailwind', desc: '', icon: <Image src="/icon/tailwind.svg" alt={"Tailwind"} height={24} width={24} /> },
]
export default function Stack() {
    return (
        <div className="h-full w-full">
            <div className="py-12">
                <h1 className="text-3xl">My Tech Skills</h1>
            </div>
            <div className="flex flex-row gap-3">
                <div className="grid grid-cols-5 gap-3 bg-[#242424] p-6 rounded-4xl w-full">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-row gap-2">
                            <div className="p-3 bg-white rounded-2xl">
                                {skill.icon}
                            </div>
                            <h4 className="text-base">{skill.name}</h4>
                        </div>
                    ))}
                </div>
                <HappyClientsCard />
            </div>
        </div>
    );
}
