import React from "react"
import './header.css'

export const Header = () => {

    return(
        <div className={'header'}>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>
            <span className={'star'}></span>

            <p className={'description'}>
                Hello, I'm <span>Hamza</span> <br/>
                I'm a front-end web developer
            </p>
            <div className={'view-my-work-btn'}>
                <p className={'text'}>
                    View my work
                </p>
                <span className={'arrow'}>
                    &#8594;
                </span>
            </div>
        </div>
    )
}