
import pythonIcon from "../../public/icons/python.svg";
import bashIcon from "../../public/icons/bash.svg";
import githubActionsIcon from "../../public/icons/github_actions.svg";
import nukeIcon from "../../public/icons/nuke.svg";
import gitlabIcon from "../../public/icons/gitlab.svg";
import mayaIcon from "../../public/icons/maya.svg";
import qtIcon from "../../public/icons/qt.svg";

import Image from 'next/image';

function WorkExperienceChicklet({ icon, name, link }) {
    return (
        <a href={link} target="_blank" rell="noopener noreferrer" className="
            h-8 px-3 flex items-center space-x-1 
            ring-1 ring-ultra_violet/25 rounded-md backdrop-blur-3xl bg-ultra_violet/5 hover:bg-white/25 transition-all
            drop-shadow-lg
        ">
            <Image src={icon} alt={name} width={23} height={"auto"} />
            <span className="font-Kanit font-regular text-space_cadet/80">{name}</span>
        </a>
    )
}

export function PythonChicklet() {
    return (
        <WorkExperienceChicklet icon={pythonIcon} name={"python"} link={"https://www.python.org/"} />
    )
}

export function BashChicklet() {
    return (
        <WorkExperienceChicklet icon={bashIcon} name={"bash"} link={"https://opensource.com/resources/what-bash"} />
    )
}

export function ActionsChicklet() {
    return (
        <WorkExperienceChicklet icon={githubActionsIcon} name={"CI/CD"} link={"https://about.gitlab.com/solutions/continuous-integration/"} />
    )
}

export function NukeChicklet() {
    return (
        <WorkExperienceChicklet icon={nukeIcon} name={"Nuke"} link={"https://www.foundry.com/products/nuke-family/nuke"} />
    )
}

export function GitlabChicklet() {
    return (
        <WorkExperienceChicklet icon={gitlabIcon} name={"Gitlab"} link={"https://about.gitlab.com/"} />
    )
}

export function MayaChicklet() {
    return (
        <WorkExperienceChicklet icon={mayaIcon} name={"Maya"} link={"https://www.autodesk.com/za/products/maya/overview-dts"} />
    )
}


export function QtChicklet() {
    return (
        <WorkExperienceChicklet icon={qtIcon} name={"Qt"} link={"https://www.qt.io/product"} />
    )
}

