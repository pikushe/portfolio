import Image from "next/image";

export default function HappyClientsCard() {
    return (
        <div className="flex flex-col gap-6 text-center justify-center items-center h-full w-2/5 bg-[#242424] rounded-4xl pt-6 pb-3">
            <div className="flex flex-row gap-1">
                {Array.from({length: 5}).map((_, index) => (
                    <div key={index} className="flex flex-row gap-2"><Image src={"/icon/star.svg"} alt={"Star"} width={18} height={18} className="text-[#f7a307]" /></div>
                ))}
            </div>
            <div>
                <h2 className="text-3xl">%100</h2>
                <h2 className="flex text-center m-auto text-xs">Happy Clients</h2>
            </div>
            <div className="hidden lg:flex">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-16 h-16 rounded-full bg-pink-300"></div>
                    <Image
                        src="/avatar/1.png"
                        alt="avatar1"
                        height={56} width={56}
                        className="relative w-14 h-14 rounded-full ring-2 ring-[#1a1a1a]"
                    />
                </div>

                {/* Avatar 2 */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-16 h-16 rounded-full bg-green-300"></div>
                    <Image
                        src="/avatar/2.png"
                        alt="avatar2"
                        height={56} width={56}
                        className="relative w-14 h-14 rounded-full ring-2 ring-[#1a1a1a]"
                    />
                </div>

                {/* Avatar 3 */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-16 h-16 rounded-full bg-orange-300"></div>
                    <Image
                        src="/avatar/3.png"
                        alt="avatar3"
                        height={56} width={56}
                        className="relative w-14 h-14 rounded-full ring-2 ring-[#1a1a1a]"
                    />
                </div>
            </div>

        </div>
    )
}