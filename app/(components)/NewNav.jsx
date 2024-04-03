import ControlBar from "./controls/ControlBar"

function NavItem({ name }) {
    return (
        <button className="
            font-NeueMachina text-2xl 
            opacity-85 hover:opacity-100 
            transition-all
        ">
            {name}
        </button>
    )
}

export default function NewNav() {
    return (
        <nav className={`
            sticky top-0 
            z-100
            flex justify-start items-center gap-4
            bg-white shadow-md shadow-space_cadet/5 ring-1 ring-black/10 rounded-sm p-4
            h-[3rem]
        `}>
            <NavItem name={"ABOUT"} />
            <NavItem name={"WORK"} />
            <NavItem name={"PROJECTS"} />
            <NavItem name={"CONTACT"} />
            <div className="grow-1 w-screen" />
            <ControlBar />
        </nav>
    )
}
