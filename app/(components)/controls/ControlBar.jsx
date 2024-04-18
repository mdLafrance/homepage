import VisibilityToggle from "./VisibilityControls"
import { WaveJaggedButton, WaveSmoothButton } from "./WaveControls"
import ThemeSwitcher from "./ThemeControl"


function ControlBarItem({ children }) {
    return (
        <li className={`
            size-7 
            transition-all duration-[80ms]
            stroke-black hover:bg-space_cadet/10 active:bg-black/20
            dark:stroke-white dark:hover:bg-light/10 dark:active:bg-light/20
        `}>
            {children}
        </li>
    )
}

export default function ControlBar({ className }) {
    return (
        <ul className={`h-7 flex gap-2 justify-end align-center z-200 ${className}`}>
            <ControlBarItem>
                <WaveSmoothButton />
            </ControlBarItem>
            <ControlBarItem>
                <WaveJaggedButton />
            </ControlBarItem>
            <ControlBarItem>
                <VisibilityToggle />
            </ControlBarItem>
            <ControlBarItem>
                <ThemeSwitcher />
            </ControlBarItem>
        </ul>
    )
}

