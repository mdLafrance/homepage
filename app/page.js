import Reveal from "./(components)/Reveal";

export default function Home() {
    return (
        <main>
            {/** Central vertical flex **/}
            <div className="flex-col">
                {/** Title section **/}
                <div className="mt-4 text-left ">
                    <Reveal>
                        <p className="
                        translate-y-[8px]
                        font-Kanit text-lg font-semibold text-space_cadet/90
                        dark:text-isabelline/90 md:text-xl
                        xl:text-3xl
                    ">Hi! My name is</p>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="
                            sm:translate-x-[-4px] 
                            text-4xl text-space_cadet font-Poppins font-extrabold 
                            dark:text-eggshell md:text-6xl xl:text-8xl
                        ">Max Lafrance</p>
                    </Reveal>
                </div>

                {/**   Brief about section **/}
                <div className="">

                    <Reveal dy={0} delay={0.3}>
                        {/** About section **/}
                        <div>
                            <p className="text-3xl text-space_cadet font-light font-Kanit">
                                I'm a software engineer based in Canada.
                            </p>
                        </div>
                    </Reveal>
                </div>


                {/** Intro **/}
            </div>

        </main >
    );
}
