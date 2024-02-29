import Reveal from "./(components)/Reveal";

export default function Home() {
    return (
        <main>
            {/** Central vertical flex **/}
            <div className="flex-col">
                {/** Title section **/}
                <div className="font-Poppins mt-4 text-left">
                    <Reveal>
                        <p className="
                        text-lg md:text-xl xl:text-3xl text-ultra_violet
                        font-Fredoka font-semibold
                        dark:text-isabelline/90
                    ">Hi! My name is</p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-4xl md:text-6xl xl:text-8xl text-space_cadet dark:text-isabelline">Max Lafrance</p>
                    </Reveal>
                </div>

                {/**   Brief about section **/}

                {/** Intro **/}
            </div>

        </main >
    );
}
