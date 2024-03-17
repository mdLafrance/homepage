"use client";

import { useTheme } from "next-themes"

export default function Page() {
    const {theme} = useTheme();

    return (
        <section className="p-8">
            <header className="text-light flex flex-col w-full h-full">
                <h2 className="text-4xl translate-x-1">
                    Hi, my name is
                </h2>
                <h1 className="text-8xl">
                    Max Lafrance
                </h1>
                <figure className="border-b border-solid border-light/20"/>

            </header>
        </section>
    )
}
