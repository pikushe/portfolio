
const experinceData = [
    { title: 'Front-end Developer', company: 'Inofy.co', start: '2024', finish: '2025' },
    { title: 'Front-end Developer 🪦', company: 'Stalk.live', start: '08-2022', finish: '12-2024' },
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
                            <div className="flex flex-row gap-3 items-start">
                                <div className="h-1.5 w-1.5 rounded-full aspect-square bg-white my-2" />
                                <div className="flex flex-col gap-1.5">
                                    <div>Certification in Web Design and Development</div>
                                    <div className="text-sm text-gray-500">42 Ecole, 2025 - Present</div>
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
        </div>
    );
}
