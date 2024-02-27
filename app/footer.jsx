import Image from 'next/image';

import githubIcon from '../public/github.svg';
import linkedinIcon from '../public/linkedin.svg';
import emailIcon from '../public/email.svg';
import linkIcon from '../public/link.svg';

function FooterIconLink({ icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={icon} width={25} alt={link} />
        </a >
    )
}

function FooterIconSpacer() {
    return (
        <span className='text-3xl  text-space_cadet'>/</span>
    )
}

function Rule() {
    return (
        <hr className='flex-1 border-t-[2px] h-1 border-space_cadet/60' />
    )
}

export default function Footer() {
    return (
        <div className="min-h-32 mt-12 w-full">
            {/** Horizontal rule with links **/}
            <div className='flex flex-row gap-4 items-center '>
                <Rule />
                <FooterIconLink icon={githubIcon} link={"https://github.com/mdLafrance"} />
                <FooterIconSpacer />
                <FooterIconLink icon={linkedinIcon} link={"https://www.linkedin.com/in/max-lafrance/"} />
                <FooterIconSpacer />
                <FooterIconLink icon={emailIcon} link={"mailto:maxlafrance97@gmail.com"} />
                <Rule />
            </div>
            {/** Credits section **/}
            <div className='mt-4 flex justify-center'>
                <a href="https://github.com/mdlafrance/homepage" target="_blank" rel="noopener noreferrer" className="
                    transition-all duration-200 
                    text-default
                    hover:backdrop-blur-xl hover:bg-white/20 hover:text-white
                    rounded-3xl py-1 px-3
                ">
                    <div className="flex gap-1">
                        <p className="font-Lora font-semibold hover:font-bold text-center">Designed & built by me</p>
                        <Image src={linkIcon} width={20} alt={"Link Icon"}/>
                    </div>
                </a>
            </div>
        </div>
    )
}
