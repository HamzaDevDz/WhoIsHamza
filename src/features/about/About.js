import React from "react";
import './about.css'

export const About = () => {

    return(
        <div className={'about'}>
            <p className={'title-about'}>
                ABOUT
                <span className={'line'}></span>
            </p>
            <div className={'skills'}>
                <div className={'skill'}>
                    <p className={'title'}>À votre service</p>
                    <p className={'desc'}>Pour la réalisation et la concrétisation de vos idées.</p>
                </div>
                <div className={'skill'}>
                    <p className={'title'}>Dynamic</p>
                    <p className={'desc'}>Websites don't have to be static, I love making pages come to life.</p>
                </div>
                <div className={'skill'}>
                    <p className={'title'}>Responsive</p>
                    <p>My layouts will work on any device, big or small.</p>
                </div>
            </div>
        </div>
    )
}