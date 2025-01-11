import { css } from "@emotion/css"
import { Cursor } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const mouseRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const mouse = mouseRef.current;

        if (mouse) {
            console.log("Set to", position)
            mouse.style.left = `${position.x}px`;
            mouse.style.top = `${position.y}px`;
        }
    }, [position])


    const style = css`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        pointer-events: none;
    `

    const mouseStyle = css`
        z-index: 1000;
        position: fixed;
    `

    return (
        <div className={style}>
            <Cursor weight="duotone" ref={mouseRef} className={mouseStyle} />
        </div>
    )
}
