import { useState } from "react"
import { ContactSection } from "../contact/Contact"

function PageSelectionItem({ name, linkTarget, isSelected, onClick }) {

    const selectedStyle = "bg-light/75 text-dark opacity-100 "
    const unselectedStyle = "text-light/90 hover:bg-light/15 "

    return (
        <button>
            <div onClick={onClick} className={`
            px-4 pt-2 pb-1
            flex w-full gap-2
            opacity-80 hover:opacity-100 transition-all duration-200
            border-solid border-b border-light/15
            ${isSelected ? selectedStyle : unselectedStyle}
        `}>
                <span className={`
                    text-3xl py-1 underline underline-offset-[5px] decoration-1 ${isSelected ? "decoration-black/50" : "decoration-black/0"}
                `}>{name}</span>
            </div>
        </button>
    )
}

export default function Sidebar() {
    const [currentPageName, setCurrentPageName] = useState("About")

    return (
        <div className={`
            flex flex-col h-full w-[350px] justify-start bg-black/30 
            border-r border-solid border-white/20
        `}>
            <PageSelectionItem name={"About"} isSelected={currentPageName == "About"} onClick={() => setCurrentPageName("About")} />
            <PageSelectionItem name={"Work"} isSelected={currentPageName == "Work"} onClick={() => setCurrentPageName("Work")} />
            <PageSelectionItem name={"More"} isSelected={currentPageName == "More"} onClick={() => setCurrentPageName("More")} />

            {/** Spacer **/}
            <div className="grow grow-1" />

            <ContactSection />
        </div>
    )
}
