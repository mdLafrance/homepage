export const WaveSmoothSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" strokeWidth={2} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 Q25 0 50 25 T100 25" fill="none" stroke="white" />
            <path d="M0 75 Q25 50 50 75 T100 75" fill="none" stroke="white" />
        </svg>
    )
}

export const WaveJaggedSvg = ({ className }) => {
    return (
        <svg width="75" height="65" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 L25 0 L50 25 L75 0" fill="none" stroke="white" />
            <path d="M0 60 L25 35 L50 60 L75 35" fill="none" stroke="white" />
        </svg>
    )
}

export function WaveShapeModifiers() {
    return (
        <div className="absolute bg-white text-white">
        <p>asdf</p>
        </div>
    )
}
