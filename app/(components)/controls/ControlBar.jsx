import VisibilityToggle, { EyeOpenSvg, EyeClosedSvg } from "./VisibilityControls"

function ShowWaveButton() {
    return (
        <button className="ring-1 ring-red-200">
            <EyeOpenSvg className="w-12 h-12" />
        </button>
    )
}

export default function ControlBar() {
    return (
        <div className="fixed top-2 right-2 flex gap-2 justify-end">
            <VisibilityToggle />
        </div>
    )
}

