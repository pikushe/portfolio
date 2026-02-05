import ImagePreview from "@/components/ImagePreview";
import {RiArrowRightUpLine} from "@remixicon/react";
import Link from "next/link";

const experinceData = [
    { title: 'Front-end Developer', company: 'Inofy.co', start: '2024', finish: '2025' },
    { title: 'Front-end Developer 🪦', company: 'Stalk.live', start: '08-2022', finish: '12-2024' },
]
const projects = [
    { title: 'Stalk.live – Discord Server Analytics Platform',role: 'Frontend Development, UI Improvements & Testing', visit: { URL: '', open: false}, company: 'Inofy.co', date: '2022-2025',thumbnail: "/StalkLogo.png", image: "/StalkGG.jpg", description: "Contributed to the front-end development and ongoing evolution of Stalk.live, a web platform that ranks Discord servers based on live activity metrics such as voice participants, member counts, live streams, and camera usage. The platform served real users and communities, requiring continuous improvements to usability and performance.My responsibilities included testing, updating, and implementing new features as the platform evolved through multiple UI redesigns. I worked across several front-end stacks during different phases of the project, helping adapt and maintain the interface as the technology stack transitioned between Vue.js, React, and Next.js, all styled with Tailwind CSS." },
    { title: 'GPE - Community Website',role: 'Frontend Development', visit: { URL: 'https://goldenphoenixexpressvtc.com/?ref=pikushe.com', open: true}, company: 'Golden Phoenix Express', date: '2025',thumbnail: "/GPELogo.png", image: "/GPE.png", description: "Contributed to the development and continuous improvement of the Golden Phoenix Express community website. I was responsible for implementing new front-end features and maintaining existing ones through updates and testing. My work focused on improving usability, ensuring responsive design, and keeping the interface consistent across different devices and screen sizes.The project was built using Next.js and Tailwind CSS, and served an active online community, requiring stable performance and regular feature enhancements." },
]
export default function About() {
    return (
        <div className="h-full w-full">
            <div className="py-12">
                <h1 className="text-3xl">About Me</h1>
            </div>
            <div className="flex flex-col gap-3">
                <div className="bg-[#242424] p-6 rounded-4xl">
                    <div className="flex flex-col gap-6 justify-start">
                        <div> <h3 className="text-lg">Education</h3> </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-row gap-3 items-start">
                                <div className="h-1.5 w-1.5 rounded-full aspect-square bg-white my-2" />
                                <div className="flex flex-col gap-1.5">
                                    <div>Associate Degree in Compute Programming</div>
                                    <div className="text-sm text-gray-500">Ataturk University, 2024 - Present</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#242424] p-6 rounded-4xl">
                    <div className="flex flex-col gap-6 justify-start">
                        <div> <h3 className="text-lg">Experience</h3> </div>
                        <div className="flex flex-col gap-6">
                            {experinceData.map((item, index) => (
                                <div key={index} className="flex flex-row gap-3 items-start">
                                    <div className="h-1.5 w-1.5 rounded-full aspect-square bg-white my-2" />
                                    <div className="flex flex-col gap-1.5">
                                        <div>{item.title}</div>
                                        <div className="text-sm text-gray-500">{item.company}, {item.start} / {item.finish}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div id={"Projects"} className="py-12">
                <h1 className="text-3xl">Projects</h1>
            </div>
            <div className="flex flex-col gap-3">
                <div className="rounded-4xl">
                    <div className="flex flex-row justify-start">
                        <div className="flex flex-col gap-6">
                            {projects.map((item, index) => (
                                <div
                                    key={index}
                                    className="group relative flex flex-col md:flex-row gap-4 md:items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                                >
                                    <div className="shrink-0">
                                        <ImagePreview
                                            thumbnail={"/projects" + item.thumbnail}
                                            fullImage={"/projects" + item.image}
                                            alt={item.title}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-1 flex-1">
                                        <div className="text-lg font-medium">{item.title}</div>
                                        <div className="text-sm text-white/70">{item.role}</div>
                                        <div className="text-xs text-white/60">{item.description}</div>
                                        <div className="text-xs text-gray-500">
                                            {item.company}, {item.date}
                                        </div>
                                    </div>

                                    {item.visit.open && <div className="absolute top-4 right-4">
                                        <Link href={item.visit.URL} target="_blank" className="flex bg-white text-black rounded-full p-3 shadow-md transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 hover:shadow-lg hover:shadow-white/20">
                                            <RiArrowRightUpLine size={20} />
                                        </Link>
                                    </div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
