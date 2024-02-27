export default function Home() {
    return (
        <main>
            {/** Central vertical flex **/}
            <div className="flex-col">
                {/** Title section **/}
                <div className="font-Poppins mt-4 text-left">
                    <p className="text-lg md:text-xl xl:text-3xl font-Lora font-bold text-white/90">Hi, my name is</p>
                    <p className="text-4xl md:text-6xl xl:text-8xl text-white/90">Max Lafrance</p>
                    <p className="
                        text-md md:text-xl xl:text-3xl text-white/90 font-Lora font-bold
                        bg-transparent
                    ">
                        {"Software developer, artist, and <???>"}
                    </p>
                </div>

                {/**   Brief about section **/}
                <div>

                </div>
                {/** Intro **/}
                <div className="py-12">
                    <div className="backdrop-blur-3xl bg-isabelline/40 rounded-xl p-6">
                        <p className="font-Lora font-bold text-2xl text-white">
                            I've been working in the field of Visual Effects as a Pipeline Engineer and TD.
                        </p>
                        <div className="
                        font-Lora text-2xl text-white 
                    ">
                            <p >
                                Developers at VFX houses (like me) help artists create their best work by creating plugins, and custom software to meet the specific needs of each unique production.
                            </p>
                            <br />
                            <p>
                                I have a deep love for coding, and am always getting lost in some new technological rabbit hole.
                            </p>
                            <br />
                            <p>If you're a fellow tinkerer/nerd, please get in touch!</p>
                        </div>
                    </div>
                </div>

            </div>

        </main >
    );
}
