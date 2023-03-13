import React from 'react';
import Card from '../UI/Card';

const Trainer = ({ image, job, name, socials }) => {
    return (
        <Card className='trainer'>
            <div className="trainer-img">
                <img src={image} className='imgt' alt="" />
            </div>
            <h3>{name}</h3>
            <p>{job}</p>
            <div className="trainer-socials">
                {
                    socials.map(({ icon, link }, index) => {
                        return <a key={index} href={link}>{icon}</a>
                    })
                }
            </div>
        </Card>
    );
};

export default Trainer;