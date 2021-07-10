import React from "react";
import './about.css'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const About = () => {

    return(
        <div id={'about'} className={'about'}>
            <p className={'about__title'}>
                ABOUT
                <span className={'about__title__line'}></span>
            </p>
            <div className={'about__services'}>
                <div className={'about__services__service'}>
                    <div className={'about__services__service__img'}>
                        <img src={'./services/service.png'} alt={'Service'} />
                    </div>
                    <p className={'about__services__service__title'}>À votre service</p>
                    <p className={'about__services__service__desc'}>Pour la réalisation et la concrétisation de vos idées.</p>
                </div>
                <div className={'about__services__service'}>
                    <div className={'about__services__service__img'}>
                        <img src={'./services/dynamic.png'} alt={'Service'} />
                    </div>
                    <p className={'about__services__service__title'}>Dynamic</p>
                    <p className={'about__services__service__desc'}>Websites don't have to be static, I love making pages come to life.</p>
                </div>
                <div className={'about__services__service'}>
                    <div className={'about__services__service__img'}>
                        <img src={'./services/responsive.png'} alt={'Service'} />
                    </div>
                    <p className={'about__services__service__title'}>Responsive</p>
                    <p className={'about__services__service__desc'}>My layouts will work on any device, big or small.</p>
                </div>
            </div>
            <div className={'about__whoiam'}>
                <div className={'about__whoiam__me'}>
                    <div className={'about__whoiam__me__img'}>
                        <img src={'./hamza.jpg'} alt={'My_Photo'} />
                    </div>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Qui suis-je?
                            </Typography>
                            <Typography color="textSecondary">
                                Je suis un développeur Front-End d'Alger en Algérie.
                            </Typography>
                            <Typography color="textSecondary">
                                J'aime vraiment coder, développer et réaliser mes idées et mes perspectives, <br/>
                                j'aime concrétiser ma vision à l'aide du JS et du CSS.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className={'about__whoiam__skills'}>
                    <div className={'about__whoiam__skills__skill about__whoiam__skills__css'}>
                        <span className={'about__whoiam__skills__skill__name'}>CSS</span>
                        <span className={'about__whoiam__skills__skill__percentage'}>80%</span>
                    </div>
                    <div className={'about__whoiam__skills__skill about__whoiam__skills__js'}>
                        <span className={'about__whoiam__skills__skill__name'}>JavaScript</span>
                        <span className={'about__whoiam__skills__skill__percentage'}>80%</span>
                    </div>
                    <div className={'about__whoiam__skills__skill about__whoiam__skills__react'}>
                        <span className={'about__whoiam__skills__skill__name'}>React</span>
                        <span className={'about__whoiam__skills__skill__percentage'}>70%</span>
                    </div>
                    <div className={'about__whoiam__skills__skill about__whoiam__skills__mysql'}>
                        <span className={'about__whoiam__skills__skill__name'}>MySQL</span>
                        <span className={'about__whoiam__skills__skill__percentage'}>60%</span>
                    </div>
                    <div className={'about__whoiam__skills__skill about__whoiam__skills__express'}>
                        <span className={'about__whoiam__skills__skill__name'}>Express</span>
                        <span className={'about__whoiam__skills__skill__percentage'}>50%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}