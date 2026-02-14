"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type Props = {
    thumbnail: string;
    fullImage?: string;
    alt: string;
};

export default function ImagePreview({
                                                thumbnail,
                                                fullImage,
                                                alt,
                                            }: Props) {
    const [open, setOpen] = useState(false);

    // ESC ile kapatma
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    return (
        <>
            {/* Küçük Kart Görseli */}
            <div
                onClick={() => fullImage ? setOpen(true) : setOpen(false)}
                className="group relative rounded-2xl overflow-hidden"
            >
                <Image
                    src={thumbnail}
                    alt={alt}
                    width={200}
                    height={200}
                    className={`transition duration-500 group-hover:scale-105 ${fullImage && "group-hover:cursor-pointer"}`}
                />
            </div>

            {/* Büyük Açılan Görsel */}
            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-full max-w-6xl h-[85vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={"/projects"+fullImage}
                            alt={alt}
                            fill
                            className="object-contain rounded-xl"
                            sizes="100vw"
                            priority
                        />

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-10 right-0 text-white text-3xl"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
