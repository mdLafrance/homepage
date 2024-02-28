import Image from 'next/image';

import githubIcon from '../public/icons/github.svg';
import linkedinIcon from '../public/icons/linkedin.svg';
import emailIcon from '../public/icons/email.svg';
import linkIcon from '../public/icons/link.svg';

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
            <div className='font-Lora font-semibold text-default'>
                <div className='my-2 flex justify-center'>
                    <a href="https://github.com/mdlafrance/homepage" target="_blank" rel="noopener noreferrer" className="
                    transition-all duration-200 
                    hover:backdrop-blur-xl hover:bg-white/20 hover:text-white
                    rounded-3xl py-1 px-3
                ">
                        <div className="flex gap-1">
                            <p className="hover:font-bold text-center">Designed & built by me</p>
                            <Image src={linkIcon} width={20} alt={"Link Icon"} />
                        </div>
                    </a>

                </div>
                <div className='my-2 flex justify-center'>
                    <p>Noise textures by <a href="https://www.freepik.com/free-vector/realistic-grainy-texture_21846587.htm#&position=5&from_view=collections&uuid=f05d5dc0-a05e-4fd3-9b1f-e0d55691b783">Freepik</a></p>
                </div>
            </div>
        </div>
    )
}
