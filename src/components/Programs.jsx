import React from 'react';
import { FaCrown } from 'react-icons/fa';
import ProgramHead from './ProgramHead';
import { programs } from '../data';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';

const Programs = () => {
    return (
        <section className="programs">
            <div className="container programs-container">

                <div className="programs-head">
                    <ProgramHead icon={<FaCrown />} title='Our Programs' />
                </div>

                <div className="programs-wrapper">
                    {
                        programs.map(({ id, icon, title, path, info }) => {
                            return (
                                <Card className="program-p" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className='btn sm'>Explore <AiFillCaretRight /> </Link>
                                </Card>
                            )
                        })
                    }
                </div>



            </div>
        </section>
    );
};

export default Programs;