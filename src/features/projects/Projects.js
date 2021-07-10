import React from "react"
import './projects.css'
import {MySwiper} from "./MySwiper/MySwiper";

export const Projects = () => {

    let width = 390
    let height = 300

    let x = window.matchMedia("(max-width: 700")

    const slides = [
        {img: <img src={'./projects/messenger.jpg'} alt={'MessengerFacebookClone'} />,
            github: 'https://github.com/baghdadhamdoud/WhoIsHamza',
            website: 'https://messenger-facebook-clone.netlify.app/'}
    ]

    return(
        <div id={'projects'} className={'projects'}>
            <div className={'projects__title'}>
                PROJECTS
                <span className={'projects__title__line'}></span>
            </div>
            <MySwiper
                slides={slides}
                class_container={'projects__swiperContainer'}
                class_wrapper={'projects__swiperWrapper'}
                width={width}
                height={height}
                />
        </div>
    )
}