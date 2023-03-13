import React from 'react';
import logo from '../images/logo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <article>
                    <Link to='/' className="logo">
                        <img src={logo} alt="" />
                    </Link>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi omnis at architecto debitis vel aperiam eum dolorem cum repudiandae. Aliquid!</p>
                    <div className="footer-socials">
                        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer noopener'> <FaFacebook /> </a>
                        <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer noopener'> <FaLinkedin /> </a>
                        <a href="https://www.twitter.com/" target='_blank' rel='noreferrer noopener'> <AiOutlineTwitter /> </a>
                        <a href="https://www.instagram.com/" target='_blank' rel='noreferrer noopener'> <AiFillInstagram /> </a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to='/about'>About</Link>
                    <Link to='/plans'>Plans</Link>
                    <Link to='/trainers'>Trainers</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                </article>
                <article>
                    <h4>Insigths</h4>
                    <Link to='/s'>Blog</Link>
                    <Link to='/s'>Case Studies</Link>
                    <Link to='/s'>Event</Link>
                    <Link to='/s'>Communities</Link>
                    <Link to='/s'>Faqs</Link>
                </article>
                <article>
                    <h4>Get in Touch</h4>
                    <Link to='/contact'>Contact Us</Link>
                    <Link to='/s'>Support</Link>

                </article>
            </div>
            <div className="footer-copyright">
                <small>M.SHAHIDUL HASAN &copy; all rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;