import { css } from "@emotion/css";
import { TopButton } from "./TopButton";
import useScrolledStore from "@/lib/scrollState";
import { ScrollIndicator } from "./ScrollIndicator";
import React from "react";

export function ContentContainer({ children }: { children: React.ReactNode }) {
    const { scrolled, setScrolled } = useScrolledStore();

    const handleScroll = (e) => {
        const div = e.target;
        setScrolled(div.scrollTop > 200);
    };

    const style = css`
        overflow-y: scroll;
        scroll-behavior: smooth;
        flex-grow: 1;
    `

    return (
        <div className={style} onScroll={handleScroll}>
            {children}
            <ScrollIndicator />
            <TopButton />
        </div>
    )
}
