"use client";

import { useThemeContext } from "../../(context)/ThemeContext"

const moon = (
    <path id="Moon" d="M63.4374046,38.4606323c-0.4258003-0.2060013-0.9384995-0.0848999-1.2276001,0.2910995 c-1.2803001,1.6650009-2.9452972,3.2001991-4.9501991,4.5625c-11.6180992,7.8808022-27.544899,4.9248009-35.4971008-6.5956993 c-7.8154011-11.3204002-4.9902-26.9736996,6.2968998-34.8936005c0.3799-0.2666,0.5263996-0.7588,0.3544998-1.1895001 c-0.1728001-0.4316-0.625-0.6835-1.0771008-0.6181c-4.6474991,0.6953-9.2070999,2.4902-13.1875,5.1893997 C6.9706059,10.0759325,2.1415057,17.427433,0.5526057,25.9079323c-1.582,8.4414024,0.2402,16.9932022,5.1308002,24.0791016 c6.2872,9.1054993,16.4864006,14.0058975,26.8554993,14.0058975c6.3173981,0,12.6982994-1.819397,18.2939987-5.6161995 c6.5800018-4.461998,11.2461014-11.1298981,13.1406021-18.7753983 C64.0877075,39.142334,63.8631058,38.6657333,63.4374046,38.4606323z M49.7098045,56.7224312 c-13.8710976,9.410099-32.8847961,5.8828011-42.3798981-7.872097c-4.5858998-6.642601-6.2948999-14.660202-4.8114996-22.5742016 C4.0086055,18.3239326,8.5379057,11.4294329,15.2723055,6.861033c2.5801001-1.75,5.4189997-3.0937002,8.3643007-3.9726 c-9.3916006,9.0702991-11.1416006,23.9258003-3.5205002,34.9668007 c8.5741997,12.4188995,25.7422009,15.6094017,38.2666016,7.1133003c0.8260994-0.5606003,1.5996017-1.149498,2.3182983-1.764698 C58.4803047,48.6472321,54.6766052,53.3542328,49.7098045,56.7224312z" />
)

const sun = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="5" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M12 2V4" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 20V22" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
)

export default function ThemeSwitcher() {
    const [theme, setTheme] = useThemeContext();

    const switchTheme = () => {
        setTheme(theme == "light" ? "dark" : "light")
    }

    return (
        <button
            className={`
                w-7 h-7 
                transition-all duration-[40ms]
                hover:bg-white/10 active:bg-white/20
                p-1
            `}
            onMouseUp={switchTheme}
        >
            <svg 
                viewBox="0 0 64 64" 
                strokeWidth={theme == "light" ? "1" : "2"} 
                stroke={theme == "light" ? "black" : "light"}
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="scale-90 scale-x-[-1] -translate-y-0.2 -translate-x-0.2"
            >
                {moon}
            </svg>

        </button>
    )
}
