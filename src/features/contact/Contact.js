import React, {useRef, useState} from "react";
import './contact.css'
import {Slide} from "react-reveal"
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export const Contact = () => {

    const name = useRef()
    const email = useRef()
    const message = useRef()

    const handleSubmitMessage = (e) => {
        e.preventDefault()
        if(name.current.value === '' || email.current.value === '' || message.current.value === ''){
            if(name.current.value === ''){
                name.current.classList.add('alert')
                setTimeout(()=>{
                    name.current.classList.remove('alert')
                }, 2000)
            }
            if(email.current.value === ''){
                email.current.classList.add('alert')
                setTimeout(()=>{
                    email.current.classList.remove('alert')
                }, 2000)
            }
            if(message.current.value === ''){
                message.current.classList.add('alert')
                setTimeout(()=>{
                    message.current.classList.remove('alert')
                }, 2000)
            }
        }
        else{
            name.current.value = ''
            email.current.value = ''
            message.current.value = ''
            alert('Submited !')
        }
    }

    return(
        <div id={'contact'} className={'contact'}>
            <div className={'contact__title'}>
                CONTACT
                <span className={'contact__title__line'}></span>
            </div>
            <p className={'contact__question'}>
                Have a question or want to work together?
            </p>
            <form className={'contact__form'} name="contact-form" method={'post'}>
                <Slide bottom delay={100}>
                    <div className={'contact__form__textField contact__form__name'}>
                        <input required className={'input'} ref={name} name={'name'}/>
                        <span className={'placeholder'}>Name</span>
                    </div>
                    <div className={'contact__form__textField contact__form__email'}>
                        <input required className={'input'} ref={email} name={'email'}/>
                        <span className={'placeholder'}>Email</span>
                    </div>
                    <div className={'contact__form__textField contact__form__message'}>
                        <textarea required className={'input'} ref={message} name={'message'}/>
                        <span className={'placeholder'}>Your message</span>
                    </div>
                    <button className={'contact__form__btnSubmit'} type={'submit'} onClick={handleSubmitMessage}>Submit</button>
                </Slide>
            </form>
            <input type="hidden" name="form-name" value="contact-form" />
            <div className={'contact__footer'}>
                <div className={'contact__footer__link'} onClick={()=>{
                    window.open('https://www.instagram.com/baghdad_hamdoud/')
                }}>
                    <InstagramIcon />
                    <p className={'contact__footer__link__title'}>Instagram</p>
                </div>
                <div className={'contact__footer__link'} onClick={()=>{
                    window.open('https://www.linkedin.com/in/baghdad-dev-2227b717a/')
                }}>
                    <LinkedInIcon />
                    <p className={'contact__footer__link__title'}>Linkedin</p>
                </div>
                <div className={'contact__footer__link'} onClick={()=>{
                    window.open('https://github.com/HamzaDevDz')
                }}>
                    <GitHubIcon />
                    <p className={'contact__footer__link__title'}>Github</p>
                </div>
                <div className={'contact__footer__link'} onClick={()=>{
                    window.open('https://www.upwork.com/freelancers/~011a731d4b8f40cb74')
                }}>
                    <HomeWorkIcon />
                    <p className={'contact__footer__link__title'}>Upwork</p>
                </div>
            </div>
        </div>
    )
}