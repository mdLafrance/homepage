
export default function LinkSvg({color, weight, className}) {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M0 0 L100 0 L100 100" fill="none" stroke={color} stroke-width={2 * weight} />
            <path d="M0 100 L90 10" fill="none" stroke={color} stroke-width={weight} />
        </svg>
    )
}

