import { ContactItem } from "./contact/Contact";

export default function Footer() {
    return (
        <div className="absolute -bottom-12 flex w-full justify-center items-center">
            <ContactItem
                footerText={"Designed & built by me"}
                className="pr-4 rounded-full opacity-80 hover:opacity-90 transition-none duration-[50ms]"
                link="https://github.com/mdLafrance/homepage"
            />
        </div>
    )
}
