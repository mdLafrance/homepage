"use client";

import { WavyBackground } from "../(components)/background-waves"

function RightAngle({ className, delta = 15 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" className={`${className} scale-[15%] z-20`}>
            <line x1="0" y1="0" x2="100" y2="0" stroke="black" stroke-width="8" />
            <line x1="100" y1="0" x2="100" y2="100" stroke="black" stroke-width="8" />
            <line x1={delta} y1={delta} x2={100 - delta} y2={delta} stroke="black" stroke-width="3" />
            <line x1={100 - delta} y1={delta} x2={100 - delta} y2={100 - delta} stroke="black" stroke-width="3" />
        </svg>
    )
}


export default function Test() {
    return (
        <div className="h-[100vh] w-full flex flex-col justify-start bg-black">

            <div className="relative z-10 m-12 rounded-sm bg-[radial-gradient(ellipse_at_center)] from-blue to-black backdrop-blur-md grow-1 grow ">
                <RightAngle className="absolute -top-5 -right-5 transform" delta={25}></RightAngle>
                <RightAngle className="absolute transform rotate-90" delta={25}></RightAngle>
                <RightAngle className="absolute transform -rotate-90" delta={25}></RightAngle>
                <RightAngle className="absolute transform rotate-180" delta={25}></RightAngle>
                <p>asdf</p>

                <div className="grow-1 text-5xl">
                </div>

            </div>

            <WavyBackground />


        </div>
    )
}
