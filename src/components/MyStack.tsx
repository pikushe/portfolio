import Link from "next/link";
import { RiArrowRightLine } from "@remixicon/react";
export default function MyStacks() {
    return (
        <div className="h-40 lg:h-3/5 w-full relative">
            <Link href={'/my-projects'} className=" w-full items-center">
                <div className="flex projects h-full w-full lg:w-[637px] rounded-[36px] group hover:scale-105 transition ">
                    <div className="flex p-4 items-end h-full w-full">
                        <div className="flex justify-center items-center m-auto z-10">
                            <h1 className="text-2xl m-auto">My Projects</h1>
                        </div>
                        <div className="bg-white rounded-full p-2.5 group-hover:-rotate-45 transition-all duration-200 z-10">
                            <RiArrowRightLine size={24} color="black" />
                        </div>
                    </div>

                    <div className="test w-full h-full absolute rounded-[36px]" />
                </div>

            </Link>
        </div>
    );
}
