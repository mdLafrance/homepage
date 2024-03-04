export default function Dots({ children }) {

    return (
        <div className="w-full h-full">
            <div className="w-full h-full grid grid-cols-12 space-y-24 bg-red-200">
                {
                    [...Array(45)].map(() => (
                        <div className="rounded-full w-1 h-1 ring-1 ring-grey-med bg-grey-med" />
                    ))
                }
            </div>
            {children}
        </div>
    )
}
