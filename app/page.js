
function Pane({ children, className }) {
    return (
        <div className={`${className} grow grow-1 border-1 border-solid border-white/20 backdrop-blur-sm bg-black/10 p-4`}>
            {children}
        </div>
    )
}


export default function Page() {
    return (
        <div>
            <p className="text-white text-3xl">TEST</p>
        </div>
    )
}
