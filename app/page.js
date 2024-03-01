import Reveal from "./(components)/Reveal";

export default function Home() {
    return (
        <main>


            {/** Central vertical flex **/}
            <div className="flex-col">
                {/** Title section **/}
                <div className="mt-4 text-left font-Poppins">
                    <Reveal>
                        <p className="
                        font-Kanit translate-y-2 translate-x-1 text-lg font-semibold text-ultra_violet
                        dark:text-isabelline/90 md:text-xl
                        xl:text-3xl
                    ">Hi! My name is</p>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <p className="text-4xl text-space_cadet dark:text-isabelline md:text-6xl xl:text-8xl">Max Lafrance</p>
                    </Reveal>
                </div>

                {/**   Brief about section **/}
                <div className="">
                    <Reveal delay={0.15}>
                        <p className="font-Kanit max-w-[50%] font-semibold sm:text-3xl text-space_cadet/90">
                            Software developer, artist, and all around nerd.
                        </p>
                    </Reveal>

                    <Reveal dy={0} delay={0.3}>
                        {/** About section **/}
                        <div className="
                            mb-8 mt-8
                            backdrop-blur-3xl bg-pale_dogwood/10 transition-all
                            shadow-black/15 shadow-lg
                            ring-2 ring-rose_quartz/50
                            rounded-2xl p-6 
                        ">
                            <p className="font-Kanit font-light text-xl ">
                                I've been working in visual effects as a pipeline engineer. For non-vfx folks - pipeline engineers
                                write internal applications, apis, and plugins to help data pass between clients and artists.

                                <br />
                                <br />

                                Pipeline staff tend to wear many hats, quickly learning domain knowledge and stepping outside
                                their usual responsibilities to contribute wherever is needed in the production.

                                <br />
                                <br />
                                
                                
                            </p>
                        </div>
                    </Reveal>
                </div>


                {/** Intro **/}
            </div>

        </main >
    );
}
