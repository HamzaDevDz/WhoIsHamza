import React from "react"
import './projects.css'
import {MySwiper} from "./MySwiper/MySwiper";

export const Projects = () => {

    const slides = [
        <img src={'./projects/messenger.jpg'} alt={'MessengerFacebookClone'} />,
        <img src={'./projects/messenger.jpg'} alt={'Fruits'} />,
        <img src={'./projects/messenger.jpg'} alt={'Khra'} />
    ]

    return(
        <div className={'projects'}>
            <div className={'projects__title'}>
                PROJECTS
                <span className={'projects__title__line'}></span>
            </div>
            <MySwiper
                slides={slides}
                class_container={'projects__swiperContainer'}
                class_wrapper={'projects__swiperWrapper'}
                width={390}
                height={300}
                />
        </div>
    )
}