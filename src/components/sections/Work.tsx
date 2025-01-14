import { css } from "@emotion/css";
import { TechnologyCarousel } from "../TechnologyCarousel";

export function Work() {
    const style = css`
        text-wrap: balance; 
    `

    return (
        <div className={style}>
            <p>
                At work I do a bit of everything, using technologies like <TechnologyCarousel /><br />
                to make sure everything is running smoothly.
            </p>
            <br />
            <p>
                The teams I've worked on have always been skeleton crews - where developers of all levels have had to step up to the plate and lead development of entire systems while learning new technologies and interfacing with stakeholders. Juggling two or three solo initiatives, while acting as support for existing products is commonplace.
            </p>
        </div>
    )
}
