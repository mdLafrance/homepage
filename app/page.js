"use client";

import Reveal from "./(components)/Reveal"
import { useThemeContext } from "./(context)/ThemeContext";

export default function Page() {
    const [theme, _] = useThemeContext();

    return (
        <section className="p-8">
            <header className={`
                flex flex-col w-full h-full
                ${theme == "light" ? "text-grey" : "text-light"}
            `}>
                <Reveal duration={1}>
                    <h2 className="text-4xl translate-x-1 ">
                        Hi, my name is
                    </h2>
                </Reveal>
                <Reveal duration={1} delay={0.8}>
                    <h1 className="text-8xl">
                        Max Lafrance
                    </h1>
                    <figure className={`translate-x-1 -translate-y-2 border-b border-dotted border-grey/60`} />
                </Reveal>

            </header>
        </section>
    )
}
