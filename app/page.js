import { fontBebas } from "@/lib/font"

export default function Home() {
    return (
        <main>
            <div className={`${fontBebas.className} text-4xl`}>
                <div className="flex-col">
                    <button>test</button>
                    <button>asdf</button>
                    <button>asdf</button>
                    <button>asdf</button>
                    <p className="flex text-white">
                        asdfasdf
                    </p>
                    <p>
                        fdsa
                    </p>
                </div>
            </div>
        </main>
    );
}
