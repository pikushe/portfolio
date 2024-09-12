import Image from "next/image";
import Logo from "../../../public/Logo.jpg"
import Link from "next/link";
import { RiTwitterXLine, RiGithubFill } from "@remixicon/react";
export default function Sidebar() {
    return (
        <aside className="flex flex-col justify-between h-full pr-6 relative flex-nowrap overflow-hidden w-1/4">
            {/* Logo*/}
            <div className="flex flex-col justify-start items-start gap-12 h-full">
                <div className="flex flex-row gap-2 items-center">
                    <div>
                        <Image src={Logo} alt="Logo" height={72} width={72} className="rounded-full" />
                    </div>
                    <div>
                        <h1 className="text-3xl tracking-widest uppercase">pikushe</h1>
                        <h4 className="text-xs text-[#b3b3b3] uppercase opacity-100">Front-End Developer</h4>
                    </div>
                </div>

                <div className="max-w-[330px] break-words">
                    <p className="text-[#b3b3b3] opacity-100 text-base tracking-widest leading-5">I specialize in crafting visually striking and user-friendly digital experiences. With a passion for blending aesthetics and functionality, I bring ideas to life, creating innovative solutions in the dynamic world of web design.</p>
                </div>

                <div className="flex p-4 h-[48px] border rounded-full items-center text-center px-6 hover:bg-[#242424] hover:border-[#242424] transition-colors duration-200 ">
                    <Link href={"/about"} className="">
                        About me
                    </Link>
                </div>
            </div>


            <div className="flex h-full items-end">
                <div className="flex flex-row gap-3">
                    <Link href={"https://x.com/pikushe"} className="border rounded-full p-2.5 hover:bg-[#242424] hover:border-[#242424]">
                        <RiTwitterXLine size={24} />
                    </Link>
                    <Link href={""} className="border rounded-full p-2.5 hover:bg-[#242424] hover:border-[#242424]">
                        <RiGithubFill size={24} />
                    </Link>
                </div>
            </div>
        </aside>
    );
}
