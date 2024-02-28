import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";

import './globals.css';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} background-gradient noise`}>
                <Header />
                {/** Div for central content area **/}
                <div className="w-screen h-screen px-20 pt-20 overflow-y-scroll flex justify-center">
                    <div className="
                            h-full flex flex-col
                            w-[80rem]
                        ">
                        <div className="flex-1">
                            {children}
                        </div>

                        <Footer />
                    </div>
                </div>
            </body>
        </html >
    );
}
