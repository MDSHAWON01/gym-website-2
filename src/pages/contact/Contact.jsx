import React from 'react';
import './Contact.css';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import Main from '../../components/Main';


const Contact = () => {
    return (
        <>
            <Main title='Get in Touch' image={HeaderImage}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minima enim aperiam illo quos sint minus repellendus laborum nulla vero.
            </Main>
            <section className="contact">
                <h1 className='head'>Contact with us</h1>
                <div className="container contact-container">
                    <div className='contact-wrapper'>

                        <a href="https://www.gmail.com/" target="_blank"><MdEmail /></a>
                        <a href="https://www.messenger.com/" target="_blank"><BsMessenger /></a>
                        <a href="https://www.whatsapp.com/" target="_blank"><IoLogoWhatsapp /></a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;