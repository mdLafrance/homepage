
export default function LinkSvg({ color, weight, className }) {
    return (
        <figure className={className}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L100 0 L100 100" fill="none" stroke={color} strokeWidth={2 * weight} />
                <path d="M0 100 L90 10" fill="none" stroke={color} strokeWidth={weight} />
            </svg>
        </figure>
    )
}

