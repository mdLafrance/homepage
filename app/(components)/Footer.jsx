"use client";

import { ContactItem } from "./contact/Contact";
import { useThemeContext } from "../(context)/ThemeContext";

export default function Footer() {
    const [theme, _] = useThemeContext();

    return (
        <footer className="fixed bottom-4 right-4 flex justify-center items-center">
            <ContactItem
                footerText={" Designed & built by me"}
                className="pr-4 rounded-full whitespace-pre"
                link="https://github.com/mdLafrance/homepage"
            />
        </footer>
    )
}
