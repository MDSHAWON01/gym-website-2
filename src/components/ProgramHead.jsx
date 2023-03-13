import React from 'react';


const ProgramHead = ({ icon, title, className }) => {
    return (
        <div className={`program-head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    );
};

export default ProgramHead;