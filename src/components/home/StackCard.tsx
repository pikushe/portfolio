import Link from "next/link";
import Image from "next/image";
import {RiArrowRightUpLine} from "@remixicon/react";

export default function StackCard() {
    return (
        <Link href={"/stack"} className="flex flex-col gap-6 h-[%40] w-full bg-[#214ade] cursor-pointer stack-radial rounded-4xl group hover:scale-105 duration-500 transition-all">
            <div>
                <h3 className="text-lg ml-4 mt-4">My Stack</h3>
            </div>
            <div className="w-full flex -space-x-2 h-full justify-center group-hover:-space-x-1 transition-all duration-700">
                <div className="perspective-distant">
                    <div className="p-3 bg-white rounded-3xl shadow-md">
                        <Image src={"/icon/nextjs.svg"} alt="Next.js" width={48} height={48} />
                    </div>
                </div>
                <div className="perspective-distant z-2">
                    <div className="p-3 bg-white rounded-3xl shadow-lg">
                        <Image src={"/icon/nestjs.svg"} alt="Nestjs" width={48} height={48} />
                    </div>
                </div>
                <div className="perspective-distant z-3">
                    <div className="p-3 bg-white rounded-3xl shadow-lg">
                        <Image src={"/icon/slack.svg"} alt="Slack" width={48} height={48} />
                    </div>
                </div>
                <div className="perspective-distant z-2">
                    <div className="p-3 bg-white rounded-3xl shadow-lg">
                        <Image src={"/icon/typescript.svg"} alt="Typescript" width={48} height={48} />
                    </div>
                </div>
                <div className="perspective-distant">
                    <div className="p-3 bg-white rounded-3xl shadow-lg">
                        <Image src={"/icon/git.svg"} alt="Git" width={48} height={48} />
                    </div>
                </div>
            </div>
            <div className="w-full flex ml-auto">
                <p className="text-gray-600 ml-auto bg-white mr-3 mb-3 rounded-full p-3"><RiArrowRightUpLine className="group-hover:rotate-45 transition-[rotate] duration-700" /></p>
            </div>
        </Link>
    )
}