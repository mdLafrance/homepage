import VisibilityToggle from "./VisibilityControls"
import { WaveJaggedButton, WaveSmoothButton } from "./WaveControls"
import ThemeSwitcher from "./ThemeControl"


export default function ControlBar() {
    return (
        <div className="fixed top-2 right-2 flex gap-2 justify-end items-center">
            <WaveSmoothButton />
            <WaveJaggedButton />
            <VisibilityToggle />
            <ThemeSwitcher />
        </div>
    )
}

