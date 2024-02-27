import Image from 'next/image';

import githubIcon from '../public/github.svg';
import linkedinIcon from '../public/linkedin.svg';
import emailIcon from '../public/email.svg';

function FooterIconLink({ icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Image src={icon} width={25} />
        </a >
    )
}

function FooterIconSpacer() {
    return (
        <span className='text-3xl text-opacity-35 text-black'>/</span>
    )
}

function Rule() {
    return (
        <hr className='flex-1 border-t-[2px] h-1 border-black/20' />
    )
}

export default function Footer() {
    return (
        <div className="min-h-32 mt-12 w-full">
            <div className='flex flex-row gap-4 items-center '>
                <Rule />
                <FooterIconLink icon={githubIcon} link={"https://github.com/mdLafrance"} />
                <FooterIconSpacer />
                <FooterIconLink icon={linkedinIcon} link={"https://www.linkedin.com/in/max-lafrance/"} />
                <FooterIconSpacer />
                <FooterIconLink icon={emailIcon} link={"mailto:maxlafrance97@gmail.com"} />
                <Rule />
            </div>
        </div>
    )
}
