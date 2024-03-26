"use client";

import { ContactItem } from "./contact/Contact";
import { useThemeContext } from "../(context)/ThemeContext";

export default function Footer() {
    const [theme, _] = useThemeContext();

    return (
        <footer className="flex justify-center items-center mt-[4rem] mb-[1rem]">
            <ContactItem
                footerText={" Designed & built by me"}
                className="pr-4 rounded-full whitespace-pre"
                link="https://github.com/mdLafrance/homepage"
            />
        </footer>
    )
}
