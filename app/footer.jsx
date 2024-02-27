import Image from 'next/image';

import githubIcon from '../public/github.svg';
import linkedinIcon from '../public/linkedin.svg';
import emailIcon from '../public/email.svg';

function FooterIconLink({ icon, link }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className='

        '>
            <Image src={icon} width={30} />
        </a >
    )
}

function FooterIconSpacer() {
    return (
        <div className='grow-0'>
            <span className='text-3xl text-opacity-35 text-black'>/</span>
        </div>
    )
}

function Rule() {
    return (
        <hr className='grow-1 border-t-[2px] h-1 w-48 border-black/20 ' />
    )
}

export default function Footer() {
    return (
        <div className="min-h-32 mt-12 ">
            <div className="flex justify-center space-x-6 items-center">
                <Rule />
                <FooterIconLink icon={githubIcon} link={"https://github.com/mdLafrance"} />
                <FooterIconSpacer />
                <FooterIconLink icon={linkedinIcon} link={"https://www.linkedin.com/in/max-lafrance/"} />
                <FooterIconSpacer />
                <FooterIconLink icon={emailIcon} link={"mailto:maxlafrance97@gmail.com"}/>
                <Rule />
            </div>
        </div>
    )
}
