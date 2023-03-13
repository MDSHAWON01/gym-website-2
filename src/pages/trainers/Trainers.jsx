import React from 'react';
import './Trainers.css';
import img from '../../images/header_bg_5.jpg';
import { trainers } from '../../data';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import Main from '../../components/Main';
import Trainer from '../../components/Trainer';

const Trainers = () => {
    return (
        <>
            <Main title='Our Trainers' image={img}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, saepe consequuntur. Commodi tenetur aliquam qui?
            </Main>

            <section className="trainers">
                <div className="containers t-container" >
                    {
                        trainers.map(({ id, image, name, job, socials }) => {
                            return <Trainer key={id} image={image} name={name} job={job} socials={
                                [
                                    { icon: <FaLinkedin />, link: socials[0] },
                                    { icon: <FaFacebook />, link: socials[1] },
                                    { icon: <AiOutlineTwitter />, link: socials[2] },
                                    { icon: <AiFillInstagram />, link: socials[3] },
                                ]
                            } />
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Trainers;