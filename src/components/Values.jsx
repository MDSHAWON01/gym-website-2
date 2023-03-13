import React from 'react';
import image from '../images/values.jpg';
import { values } from '../data';
import { GiCutDiamond } from 'react-icons/gi';
import ProgramHead from './ProgramHead';
import Card from '../UI/Card';

const Values = () => {
    return (
        <section className="values">
            <div className="container values-container">


                <div className="values-left">
                    <div className="values-img">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div className="values-right">
                    <ProgramHead icon={<GiCutDiamond />} title="values" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, explicabo.</p>
                    <div className="values-wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return <Card>
                                    <div className="values-v">
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </div>
                                </Card>
                            })
                        }
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Values;