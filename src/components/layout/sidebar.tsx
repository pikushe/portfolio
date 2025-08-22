import Image from "next/image";
import Link from "next/link";
import { RiTwitterXLine, RiGithubFill, RiMenuLine, RiDiscordFill } from "@remixicon/react";
export default function Sidebar() {
    return (
        <aside
            className="hidden md:flex flex-col lg:justify-around lg:h-full gap-12 pr-6 relative flex-nowrap overflow-hidden md:w-1/4 w-full h-full p-6 lg:p-12">

            <div className="flex flex-col lg:justify-start lg:items-start gap-12 lg:h-full">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-row gap-2 items-center">
                        <Link href={"/"}>
                            <Image src="/pp.jpg" alt="Logo" height={72} width={72} className="rounded-full" />
                        </Link>
                        <div>
                            <div className="flex flex-col gap-0">
                                <h1 className="text-3xl tracking-widest uppercase">pikushe</h1>
                                <span className="block md:hidden lg:block text-xs text-gray-600">OR piku1337</span>
                            </div>
                            <h4 className="text-xs text-[#b3b3b3] uppercase opacity-100">Front-End Developer</h4>
                        </div>
                    </div>
                    <div
                        className="md:hidden flex p-2.5 border hover:border-[#242424] hover:bg-[#242424] rounded-full items-center">
                        <RiMenuLine size={25}/>
                    </div>
                </div>


                <div className="lg:max-w-[330px] break-words">
                    <p className="text-[#b3b3b3] opacity-100 text-base tracking-widest leading-5">I specialize in
                        crafting visually striking and user-friendly digital experiences. With a passion for blending
                        aesthetics and functionality, I bring ideas to life, creating innovative solutions in the
                        dynamic world of web design.</p>
                </div>

                <div
                    className="flex justify-start h-[48px] border rounded-full items-center px-6 hover:bg-[#242424] hover:border-[#242424] transition-colors duration-200 w-[135px] lg:w-auto">
                    <Link href={"/about"} className="">
                        About me
                    </Link>
                </div>
            </div>


            <div className="flex lg:h-full justify-end md:justify-start lg:items-end">
                <div className="flex flex-row gap-3">
                    <Link target="_blank" href={"https://x.com/pikushe"}
                          className="border rounded-full p-2.5 hover:bg-[#242424] hover:border-[#242424] duration-200">
                        <RiTwitterXLine size={24}/>
                    </Link>
                    <Link target="_blank" href={"https://github.com/pikushe"}
                          className="border rounded-full p-2.5 hover:bg-[#242424] hover:border-[#242424] duration-200">
                        <RiGithubFill size={24}/>
                    </Link>
                    <Link target="_blank" href={"https://discord.gg/cJx5ynDwSj"}
                          className="border rounded-full p-2.5 hover:bg-[#242424] hover:border-[#242424] duration-200">
                        <RiDiscordFill size={24}/>
                    </Link>
                </div>
            </div>
        </aside>
    );
}
