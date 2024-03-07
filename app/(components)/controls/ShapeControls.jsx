export const WaveSmoothSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" strokeWidth={4} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 Q25 0 50 25 T100 25" fill="none" stroke="white" />
            <path d="M0 75 Q25 50 50 75 T100 75" fill="none" stroke="white" />
        </svg>
    )
}

export const WaveJaggedSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 75 65" strokeWidth={3} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 25 L25 0 L50 25 L75 0" fill="none" stroke="white" />
            <path d="M0 60 L25 35 L50 60 L75 35" fill="none" stroke="white" />
        </svg>
    )
}

export const EyeSvg = ({ className }) => {
    return (
        <svg viewBox="0 0 100 100" strokeWidth={3} xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M5 45 L25 30 L50 25 L75 30 L95 45" fill="none" stroke="white" />
            <path d="M25 30 L15 15" fill="none" stroke="white" />
            <path d="M50 25 L50 10" fill="none" stroke="white" />
            <path d="M75 30 L85 15" fill="none" stroke="white" />
            <circle cx="50" cy="40" r="15" stroke="white" stroke-width="1" fill="none" />

        </svg>

    )
}


