import React from "react"
import './navBar.css'

export const NavBar = () => {

    return(
        <div className={'navBar'}>
            <div className={'container_navBar'}>
                <p className={'home-anchor'}>HOME</p>
                <p className={'about-anchor'}>ABOUT</p>
                <p className={'projects-anchor'}>PROJECTS</p>
                <p className={'contact-anchor'}>CONTACT</p>
            </div>
        </div>
    )
}