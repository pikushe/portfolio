import {RiArrowRightUpLine} from "@remixicon/react";
import Image from "next/image";

function shuffle<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.4);
}
const images = ["/projects/1.png", "/projects/2.png", "/projects/3.png", "/projects/4.png", "/projects/5.svg", "/projects/6.png"];
export default function MyProjectsCard() {
    const col1 = shuffle(images);
    const col2 = shuffle(images);
    const col3 = shuffle(images);
    return (
        <div className="h-1/3 md:h-full relative text-center items-center w-full rounded-4xl overflow-hidden group hover:scale-105 duration-500 transition-[scale] cursor-pointer">
            <div className="absolute inset-0 z-0 flex">
                <div className="w-1/3 overflow-hidden">
                    <div className="flex flex-col animate-scroll-up">
                        {col1.concat(col1).map((src, i) => (
                            <Image key={`col1-${i}`} alt="Column" width={200} height={192} src={src} className="w-full h-48 object-cover" />
                        ))}
                    </div>
                </div>

                <div className="w-1/3 overflow-hidden">
                    <div className="flex flex-col animate-scroll-down">
                        {col2.concat(col2).map((src, i) => (
                            <Image key={`col2-${i}`} alt="Column" width={200} height={192} src={src} className="w-full h-48 object-cover" />
                        ))}
                    </div>
                </div>

                <div className="w-1/3 overflow-hidden">
                    <div className="flex flex-col animate-scroll-up">
                        {col3.concat(col3).map((src, i) => (
                            <Image key={`col3-${i}`} alt="Column" width={200} height={192} src={src} className="w-full h-48 object-cover" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 z-5 pointer-events-none bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
            <div className="h-full flex flex-col justify-between text-center items-center relative z-10 rounded-xl ">
                <h2 className="flex text-center items-center text-3xl font-bold m-auto h-96 md:h-0">My Projects</h2>
                <p className="hidden md:block text-gray-600 ml-auto bg-white mr-3 mb-3 rounded-full p-3"><RiArrowRightUpLine className="group-hover:rotate-45 transition-[rotate] duration-700" /></p>
            </div>
        </div>
    )
}