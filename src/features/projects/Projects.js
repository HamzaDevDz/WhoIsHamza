import React from "react"
import './projects.css'
import {MySwiper} from "./MySwiper/MySwiper";
import {Fade} from "react-reveal";
import CircleIcon from '@mui/icons-material/Circle';

export const Projects = () => {

    let width
    let height

    if (window.matchMedia("(max-width: 800px)").matches) {
        width = 300
        height = 210
    } else {
        width = 390
        height = 300
    }


    const slides = [
        {img: <img src={'./projects/messenger.jpg'} alt={'MessengerFacebookClone'} />,
            github: 'https://github.com/hamzadevdz/WhoIsHamza',
            website: 'https://messenger-facebook-clone.netlify.app/'},
        {img: <img src={'./projects/instagram.JPG'} alt={'InstagramClone'} />,
        github: 'https://github.com/hamzadevdz/instagram-clone',
        website: 'https://instagram-clone-byhamza.netlify.app/'}
    ]

    return(
        <div id={'projects'} className={'projects'}>
            <div className={'projects__title'}>
                PROJECTS
                <span className={'projects__title__line'}></span>
            </div>
            {/*<Fade bottom delay={300}>*/}
            {/*    <MySwiper*/}
            {/*        slides={slides}*/}
            {/*        class_container={'projects__swiperContainer'}*/}
            {/*        class_wrapper={'projects__swiperWrapper'}*/}
            {/*        width={width}*/}
            {/*        height={height}*/}
            {/*    />*/}
            {/*</Fade>*/}
            {/*<div className={'projects__container'}>*/}
            {/*    <div className={'projects__container__project'}>*/}
            {/*        <img className={'projects__container__project__img'} src={'./projects/messenger.jpg'} alt={'MessengerFacebookClone'} />*/}
            {/*        <p className={'projects__container__project__title'}>*/}
            {/*            Messenger Prototype*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className={'projects__container__project'}>*/}
            {/*        <img className={'projects__container__project__img'} src={'./projects/instagram.JPG'} alt={'InstagramClone'} />*/}
            {/*        <p className={'projects__container__project__title'}>*/}
            {/*            Instagram Prototype*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'projects__container'}>*/}
            {/*    <div className={'projects__container__project'}>*/}
            {/*        <img className={'projects__container__project__img'} src={'./projects/facebook/home.JPG'} alt={'Facebook'} />*/}
            {/*        <p className={'projects__container__project__title'}>*/}
            {/*            Facebook*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div className={'projects__container__project'}>*/}
            {/*        <img className={'projects__container__project__img'} src={'./projects/WAX/Capture.JPG'} alt={'WAX'} />*/}
            {/*        <p className={'projects__container__project__title'}>*/}
            {/*            WAX e-commerce*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'projects__container'}>
                <div className={'projects__container__progress'}>
                    <CircleIcon className={'projects__container__progress__bullet'}/>
                    <CircleIcon className={'projects__container__progress__bullet'}/>
                    <CircleIcon className={'projects__container__progress__bullet'}/>
                    <CircleIcon className={'projects__container__progress__bullet'}/>
                </div>
                {/*WAX*/}
                <div className={'projects__container__project'}>
                    <Fade left>
                        <div className={'projects__container__project__img'}>
                            <img src={'./projects/WAX/Capture.JPG'} alt={''} />
                            <div className={'projects__container__project__img__btn'}>
                                <button onClick={() => {
                                    window.open('https://github.com/HamzaDevDz/Mini-eCommerce-WebSite')
                                }}>
                                    Github
                                </button>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={'projects__container__project__description projects__container__project__descriptionRight'}>
                            <p className={'projects__container__project__description__title'}>
                                E-Commerce WAX
                            </p>
                            <p className={'projects__container__project__description__text'}>
                                A shopping website for the sale of clothes made of WAX fabric. Implemented with React, Redux-Toolkit, Express and MySQL.
                            </p>
                            <p className={'projects__container__project__description__date'}>
                                May 2021
                            </p>
                        </div>
                    </Fade>
                </div>
                {/*MESSENGER*/}
                <div className={'projects__container__project'}>
                    <Fade left>
                        <div className={'projects__container__project__description projects__container__project__descriptionLeft'}>
                            <p className={'projects__container__project__description__title'}>
                                Messenger Prototype
                            </p>
                            <p className={'projects__container__project__description__text projects__container__project__description__textLeft'}>
                                A prototype of Facebook Messenger. I was able to discover Firebase and all its power, especially the real time data.
                            </p>
                            <p className={'projects__container__project__description__date'}>
                                August 2021
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={'projects__container__project__img'}>
                            <img src={'./projects/messenger.jpg'} alt={''} />
                            <div className={'projects__container__project__img__btn'}>
                                <button onClick={() => {
                                    window.open('https://github.com/HamzaDevDz/messenger-facebook-clone')
                                }}>
                                    Github
                                </button>
                            </div>
                        </div>
                    </Fade>
                </div>
                {/*INSTAGRAM*/}
                <div className={'projects__container__project'}>
                    <Fade left>
                        <div className={'projects__container__project__img'}>
                            <img src={'./projects/instagram.jpg'} alt={''} />
                            <div className={'projects__container__project__img__btn'}>
                                <button onClick={() => {
                                    window.open('https://github.com/HamzaDevDz/instagram-clone')
                                }}>
                                    Github
                                </button>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={'projects__container__project__description projects__container__project__descriptionRight'}>
                            <p className={'projects__container__project__description__title'}>
                                An attempt at Instagram
                            </p>
                            <p className={'projects__container__project__description__text'}>
                                A test of Instagram developed with React, Express and Firebase.
                            </p>
                            <p className={'projects__container__project__description__date'}>
                                September 2021
                            </p>
                        </div>
                    </Fade>
                </div>
                {/*Facebook*/}
                <div className={'projects__container__project'}>
                    <Fade left>
                        <div className={'projects__container__project__description projects__container__project__descriptionLeft'}>
                            <p className={'projects__container__project__description__title'}>
                                Facebook
                            </p>
                            <p className={'projects__container__project__description__text projects__container__project__description__textLeft'}>
                                A lightweight version of Facebook developed under the MERN stack.
                            </p>
                            <p className={'projects__container__project__description__date'}>
                                November 2021
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={'projects__container__project__img'}>
                            <img src={'./projects/Facebook/home.JPG'} alt={''} />
                            <div className={'projects__container__project__img__btn'}>
                                <button onClick={() => {
                                    window.open('https://github.com/HamzaDevDz/Facebook-MERN-Clone')
                                }}>
                                    Github
                                </button>
                                <button onClick={() => {
                                    window.open('https://facebook-clone-mern.netlify.app/home')
                                }}>
                                    Website
                                </button>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}