import Globe from "@/components/home/contact/Globe";

export default function ContactCard() {
    return (
        <div className="flex bg-[#f7a307] rounded-l-4xl group">
            <h2 className="flex mt-auto text-start items-end text-lg font-bold md:h-0 ml-3 mb-3">Contact</h2>
            <div className="relative w-[300px] h-[250px] object-cover rounded-4xl">
                <div className="absolute w-[300px] h-[250px] rounded-4xl">
                    <Globe />
                </div>

            </div>

        </div>
    )
}