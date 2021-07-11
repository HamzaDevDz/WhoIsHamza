import React, {useEffect} from "react"
import './navBar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {Slide} from "react-reveal";

export const NavBar = () => {

    let aboutCoord
    let projectsCoord
    let contactCoord
    useEffect(()=>{
        aboutCoord = document.getElementById('about').getBoundingClientRect().top
        projectsCoord = document.getElementById('projects').getBoundingClientRect().top
        contactCoord = document.getElementById('contact').getBoundingClientRect().top
    },[])


    document.onscroll = () => {
        const navBar = document.querySelector('.navBar')
        if(window.scrollY >= window.innerHeight){
            if(!navBar.classList.contains('floating')){
                navBar.classList.add('floating')
            }
        }
        else{
            if(navBar.classList.contains('floating')){
                navBar.classList.remove('floating')
            }
        }

        const navBar_home = document.querySelector('.navBar__anchors__home')
        const navBar_about = document.querySelector('.navBar__anchors__about')
        const navBar_projects = document.querySelector('.navBar__anchors__projects')
        const navBar_contact = document.querySelector('.navBar__anchors__contact')

        if(window.scrollY < aboutCoord){
            if(navBar_about.classList.contains('into')){
                navBar_about.classList.remove('into')
            }
            if(!navBar_home.classList.contains('into')){
                navBar_home.classList.add('into')
            }
        }
        else if(window.scrollY >= aboutCoord && window.scrollY < projectsCoord){
            if(navBar_home.classList.contains('into')){
                navBar_home.classList.remove('into')
            }
            if(navBar_projects.classList.contains('into')){
                navBar_projects.classList.remove('into')
            }
            if(!navBar_about.classList.contains('into')){
                navBar_about.classList.add('into')
            }
        }
        else if(window.scrollY >= projectsCoord && window.scrollY < contactCoord){
            if(navBar_about.classList.contains('into')){
                navBar_about.classList.remove('into')
            }
            if(navBar_contact.classList.contains('into')){
                navBar_contact.classList.remove('into')
            }
            if(!navBar_projects.classList.contains('into')){
                navBar_projects.classList.add('into')
            }
        }
        else if(window.scrollY >= contactCoord){
            if(navBar_projects.classList.contains('into')){
                navBar_projects.classList.remove('into')
            }
            if(!navBar_contact.classList.contains('into')){
                navBar_contact.classList.add('into')
            }
        }
    }

    return(
        <div className={'navBar'}>
            <div className={'navBar__anchors'}>
                <AnchorLink href='#header' className={'navBar__anchors__home navBar__anchor'}>HOME</AnchorLink>
                <AnchorLink href='#about' className={'navBar__anchors__about navBar__anchor'}>ABOUT</AnchorLink>
                <AnchorLink href='#projects' className={'navBar__anchors__projects navBar__anchor'}>PROJECTS</AnchorLink>
                <AnchorLink href='#contact' className={'navBar__anchors__contact navBar__anchor'}>CONTACT</AnchorLink>
            </div>
        </div>
    )
}