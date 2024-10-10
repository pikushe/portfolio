import Link from "next/link";
export default function BottomCard() {
    return (
        <div className="flex flex-row gap-2 w-full h-2/5 relative">
            <Link href={"/contact"} className="flex w-3/5  h-full">
                <div className="flex contact-image items-center h-full w-full rounded-[36px] group hover:scale-95 transition bg-red-400">
                    <div className="flex justify-center items-center m-auto z-10">
                        <h1 className="text-2xl m-auto">Contact</h1>
                    </div>
                    
                </div>
            </Link>
            <div className="flex items-center w-2/5 bg-red-400">
                Happy Clients
            </div>
        </div>
    );
}
