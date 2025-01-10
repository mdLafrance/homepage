import { css } from "@emotion/css";
import { useRef, useState } from "react";
import { TopButton } from "./TopButton";

export function ContentContainer({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = (e) => {
        const div = e.target;
        setIsScrolled(div.scrollTop > 100);
    };

    const style = css`
        overflow-y: scroll;
        scroll-behavior: smooth;
        flex-grow: 1;
    `

    return (
        <div className={style} onScroll={handleScroll}>
            {children}
            {isScrolled && <TopButton />}
        </div>
    )
}
