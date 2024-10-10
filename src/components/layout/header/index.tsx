"use client"
import { useEffect, useState } from "react";
import { RiMenuLine } from "@remixicon/react";
export default function Header() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const day = now.getDate();
            const month = now.toLocaleString('default', { month: 'short' });
            const year = now.getFullYear();

            const formattedTime = `${hours}:${minutes}  ${month} ${day}, ${year}`;
            setCurrentTime(formattedTime);
        };
        
        updateClock();
        const timer = setInterval(updateClock, 1000)

        return () => clearInterval(timer)
    }, [])
    return (
        <header className="lg:flex flex-row justify-between bg-[#121212] h-min p-3 rounded-full w-full items-center hidden">
            <div>
                {currentTime}
            </div>
            <div className="p-2.5 border hover:border-[#242424] hover:bg-[#242424] rounded-full">
                <RiMenuLine size={25} />
            </div>
        </header>
    );
}
