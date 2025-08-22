import Image from "next/image";

const avatars = [
    { avatar: "/avatar/1.png", color: "bg-pink-300" },
    { avatar: "/avatar/2.png", color: "bg-green-300" },
    { avatar: "/avatar/3.png", color: "bg-orange-300" }
]
export default function HappyClientsCard() {
    return (
        <div className="flex flex-col gap-6 text-center justify-center items-center h-full w-2/5 bg-[#242424] rounded-4xl pt-6 pb-3">
            <div className="flex flex-row gap-0.5">
                {Array.from({length: 5}).map((_, index) => (
                    <div key={index} className="flex flex-row gap-2"><Image src={"/icon/star.svg"} alt={"Star"} width={18} height={18} className="text-[#f7a307]" /></div>
                ))}
            </div>
            <div className="flex flex-col">
                <h2 className="text-3xl">100%</h2>
                <h2 className="text-xs">Happy Clients</h2>
            </div>
            <div className="hidden lg:flex flex-row -space-x-3">
                {avatars.map((avatar, index) => (
                    <div key={index} className={`relative w-16 h-16 flex items-center justify-center ${index == 1 && "z-2"}`}>
                        <div className="absolute w-16 h-16 rounded-full ring-[#1a1a1a]"></div>
                        <Image
                            src={avatar.avatar}
                            alt="avatar1"
                            height={56} width={56}
                            className={`relative w-14 h-14 rounded-full ring-2 ${avatar.color} ring-[#1a1a1a]`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}