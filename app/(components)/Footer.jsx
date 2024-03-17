import { ContactItem } from "./contact/Contact";

export default function Footer() {
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
