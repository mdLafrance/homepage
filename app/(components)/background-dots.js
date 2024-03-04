"use client";

import { AnimatePresence, motion, useCycle, useTime } from "framer-motion";

const rows = new Array(4000).fill(1);

export default function Dots() {
    function handleMouse(event) {
        console.log("Mouse! ", event.pageX, event.pageY)
    }

    return (
        <div className=" p-8 max-w-[100rem] max-h-[80vh] top-0 fixed overflow-clip flex flex-wrap justify-center" onMouseMove={handleMouse}>
            {
                rows.map((_, i) => (
                    // <motion.div
                    //     key={i}
                    //     className="h-3 w-3 flex justify-center items-center"
                    //     initial={{opacity: 0.2}}
                    //     whileHover={{
                    //         opacity: 0.5,
                    //     }}
                    //     transition={{ duration: 3, ease: "linear" }}
                    // >
                    //     <Dot />
                    // </motion.div>
                    <motion.div
                        key={i}
                        className="w-h h-3 flex justify-center items-center"
                        initial={{ opacity: 0.2 }} // Initial opacity
                        whileHover={{ opacity: 0.5 }} // Opacity when hovering
                        transition={{
                            duration: 2.5,
                            times: [0, 0.1, 0.15, 0.18, 0.2, 1],
                            repeat: Infinity,
                            repeatType: "Loop"
                        }}
                    >
                        <Dot />
                    </motion.div>
                ))
            }

        </div>
    )
}

function Dot({ opacity }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none">
            <circle fill="black" id="pattern-circle" cx="5" cy="5" r="3" />
        </svg>
    )
}
