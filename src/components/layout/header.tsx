"use client"
import {RiMenuLine} from "@remixicon/react";
import {useEffect, useMemo, useState} from "react";

export default function Header() {
    const [now, setNow] = useState<Date>(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    const { timeStr, dateStr } = useMemo(() => {
        const timeFmt = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: 'Europe/Istanbul',
        });
        const dateFmt = new Intl.DateTimeFormat('en-US', {
            month: 'short', // Aug
            day: '2-digit', // 19
            year: 'numeric', // 2025
            timeZone: 'Europe/Istanbul',
        });

        const t = timeFmt.format(now);
        const d = dateFmt.format(now);

        return { timeStr: t, dateStr: d };
    }, [now]);

    return (
        <header className="flex flex-row justify-between bg-[#121212] rounded-full opacity-[1] p-3 items-center">
            <div className="">{timeStr} {dateStr}</div>
            <div className="w-auto h-auto p-2.5 border rounded-full">
                <RiMenuLine size={25} />
            </div>
        </header>
    )
}