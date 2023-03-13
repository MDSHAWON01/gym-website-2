import React from 'react';
import './Plan.css';
import img from '../../images/header_bg_4.jpg';
import { plans } from '../../data';
import Main from '../../components/Main';
import Card from '../../UI/Card';

const Plans = () => {
    return (
        <>
            <Main title='MemberShip Plan' image={img}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, quisquam maxime ipsa molestias quam nisi.
            </Main>

            <section className="plans">
                <div className="container plans-container">
                    {
                        plans.map(({ id, name, desc, price, features }) => {
                            return <Card key={id} className="plan">
                                <h3>{name}</h3>
                                <small>{desc}</small>
                                <h1>{`$${price}`}</h1><h2>/mo</h2>
                                <h4>Features</h4>
                                {
                                    features.map(({ feature, available }, index) => {
                                        return <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                                    })
                                }
                                <button className="btn lg">Choose Plan</button>
                            </Card>
                        })
                    }
                </div>
            </section>
        </>
    );
};

export default Plans;