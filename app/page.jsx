"use client";

import { motion } from "framer-motion";
import { useThemeContext } from "./(context)/ThemeContext";
import Link from "next/link";
import { ContactSection } from "./(components)/contact/Contact";
import Reveal from "./(components)/Reveal";


function MapleLeafSVG({ className }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
            <path id="canada--maple-leaf_1_" d="M16.361,31h-0.52v-6.592l-7.596,0.949c-0.124,0.015-0.245-0.034-0.323-0.129
	c-0.079-0.096-0.103-0.225-0.063-0.343l0.917-2.753l-7.792-5.845c-0.107-0.081-0.161-0.213-0.14-0.346s0.115-0.242,0.242-0.284
	l2.606-0.869L1.678,11.16c-0.063-0.126-0.047-0.277,0.041-0.386s0.23-0.16,0.368-0.124l3.677,0.919l0.895-2.684
	c0.039-0.119,0.137-0.208,0.259-0.237C7.039,8.62,7.167,8.656,7.255,8.744l4.126,4.125L9.649,5.078
	c-0.028-0.126,0.014-0.259,0.11-0.345c0.097-0.087,0.234-0.115,0.355-0.074l2.727,0.909l2.852-4.752c0.13-0.217,0.487-0.217,0.617,0
	l2.852,4.752l2.727-0.909c0.126-0.041,0.259-0.013,0.355,0.074c0.097,0.086,0.139,0.219,0.11,0.345l-1.731,7.793l4.125-4.125
	c0.088-0.088,0.215-0.125,0.338-0.096c0.121,0.029,0.219,0.118,0.259,0.237l0.895,2.684l3.677-0.919
	c0.133-0.033,0.28,0.014,0.368,0.124c0.088,0.109,0.104,0.26,0.041,0.386L28.51,14.79l2.606,0.869
	c0.127,0.042,0.22,0.151,0.241,0.284c0.021,0.133-0.032,0.265-0.14,0.346l-7.792,5.844l0.918,2.754
	c0.039,0.118,0.015,0.247-0.063,0.343c-0.077,0.096-0.192,0.146-0.323,0.129l-7.596-0.949V31z M1.766,16.124l7.451,5.588
	c0.124,0.093,0.175,0.255,0.125,0.402l-0.819,2.458l7.434-0.93c0.03-0.005,0.06-0.003,0.089,0l7.434,0.93l-0.819-2.458
	c-0.049-0.147,0.002-0.31,0.126-0.402l7.45-5.588l-2.349-0.583c-0.099-0.033-0.179-0.107-0.219-0.204
	c-0.039-0.096-0.036-0.206,0.011-0.299l1.65-3.3l-3.241,0.81c-0.185,0.047-0.369-0.058-0.429-0.235l-0.815-2.447l-4.588,4.588
	c-0.113,0.114-0.29,0.138-0.428,0.061c-0.141-0.077-0.213-0.237-0.179-0.394l1.862-8.379l-2.397,0.599
	c-0.161,0.055-0.336-0.011-0.423-0.156L16.001,1.7L13.31,6.185c-0.087,0.145-0.264,0.209-0.422,0.156L10.49,5.542l1.863,8.379
	c0.035,0.156-0.038,0.317-0.178,0.394c-0.141,0.079-0.314,0.052-0.428-0.061L7.158,9.667l-0.816,2.447
	c-0.059,0.179-0.245,0.282-0.429,0.235l-3.241-0.81l1.65,3.3c0.047,0.093,0.051,0.203,0.011,0.299
	c-0.04,0.097-0.12,0.171-0.219,0.204L1.766,16.124z"/>
        </svg>
    )
}

const transitions = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.6,
            staggerChildren: 0.2
        }
    }
}

function PageSection({ name }) {
    return (
        <section id="section1" className="flex flex-col group p-4">
            <div className="flex justify-start mb-4">
                <p className="text-8xl">.</p>
                <p className="text-8xl transition-all duration-200 group-hover:underline decoration-1 underline-offset-[6px]">{name}</p>
            </div>
            <p>Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</p>
        </section>
    )
}

export default function Page() {
    const [theme, _] = useThemeContext();

    return (
        <div
            className={`
                flex justify-center items-center w-full h-full
                ${theme == "light" ? "text-space_cadet stroke-black" : "text-light stroke-light"}
            `}
        >
            {/** Vertical content area **/}
            <div
                className="h-full flex flex-col w-[65rem] p-12"
            >
                <div className="grow-[2]" />
                <header>
                    <Reveal duration={0.5}>
                        <p className="text-5xl">
                            Hi, my name is
                        </p>
                    </Reveal>
                    <Reveal duration={0.5} delay={0.1}>
                        <p variants={transitions} className="text-9xl -translate-x-2">
                            Max Lafrance.
                        </p>
                    </Reveal>
                </header>
                <div className="h-[2rem]" />
                <div className="pb-[5rem]">
                    <Reveal duration={0.5} delay={0.5}>
                        <div className="flex gap-2 items-center text-3xl justify-start">
                            <span >I'm a Software Engineer from Canada</span>
                            <MapleLeafSVG className={`w-7 h-7 stroke-[1px] -translate-y-1`} />
                        </div>
                        <p className="text-3xl">
                            I design and build solutions for the VFX industry.
                        </p>
                    </Reveal>
                </div>
                <div className="grow-[3]" />
                <Reveal delay={0.5} duration={1}>
                    <ContactSection />
                </Reveal>
            </div>
        </div>
    )
}
