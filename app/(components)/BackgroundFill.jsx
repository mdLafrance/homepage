export default function BackgroundFill() {

    return (
        <div className={`
            pointer-events-none
            fixed w-screen h-screen top-0 left-0
            bg-white dark:bg-black
        `}>
        </div>
    )
}
