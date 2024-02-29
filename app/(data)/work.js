import { PythonChicklet, QtChicklet, MayaChicklet, NukeChicklet, BashChicklet, ActionsChicklet, GitlabChicklet } from "../work/WorkChicklets"

export const work_experiences = [
    {

        title: "Junior Pipeline Engineer",
        company: "BeloFX",
        date: "April 2022 - Present",
        summary: "Contributed to the architecture and design of core systems as an early developer at a VFX startup. Product owner and maintainer of our data ingestion system used daily by an international data ops team of 15+ users. Met often with stakeholders and team leads from other departments to discuss requirements and product direction. \
\
\
Often acted as primary technical liaison within the company when onboarding new clients, in order to consult on unique product requirements they may have had. \
\
Advocated for and implemented better observability and maintainability patterns within the codebase, including implementing and maintaining CI / CD pipelines for linting, testing, and automatic documentation generation.\
",
        skills: [
            PythonChicklet,
            BashChicklet,
            ActionsChicklet,
            NukeChicklet,
            GitlabChicklet,
            QtChicklet
        ]
    },
    {
        title: "Software developer intern",
        company: "Industrial Brothers",
        date: "Summer 2019, Summer 2018",
        summary: "Developed extension plugins for our digital content creation software including Autodesk Maya, and Nuke. These plugins leveraged third party apis, and the integration of the Qt graphics library to extend the functionality of these programs to better serve artist needs. \
\
Contributed to an R&D proposal for an overhaul of the studio’s asset organization system. This system included a small DSL and graphical interface. (Note: this was developed prior to USD) \
\
Implemented a novel algorithm for testing certain characteristics of 3d mesh quality. This algorithm was faster than its predecessor by a factor of a full O(n), and took the completion time for large sets of vertices down from minutes to seconds. \
",
        skills: [
            PythonChicklet,
            MayaChicklet,
            QtChicklet,
            NukeChicklet
        ]
    },
    {
        title: "Software developer intern",
        company: "Awesometown Entertainment",
        date: "Summer 2017",
        summary: "Rewrote core studio DCC software extensions.\
Audited studio code quality using our in-house testing software. Added updates to this software to increase ease of use and reliability.\
Maintained the studio MySQL database. \
",
        skills: [
            PythonChicklet,
            MayaChicklet,
            QtChicklet
        ]
    },
    {
        title: "Junior TD",
        company: "Arc Productions",
        date: "June 2015 - January 2016",
        summary: "Worked directly with team leads to develop scripts and tools to increase artist efficiency.\
Finalized various visual effects, including physics simulations, and character turntables.\
Model retopology and uv’ing for show assets.\
",
        skills: [
            PythonChicklet,
            MayaChicklet,
            NukeChicklet
        ]
    }
]
