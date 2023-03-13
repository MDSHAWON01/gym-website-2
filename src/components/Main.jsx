import React from 'react';

const Main = ({ title, image, children }) => {
    return (
        <header className="main2">
            <div className="main2-container">

                <div className="main2-bg">
                    <img src={image} alt="" />
                </div>

                <div className="main2-content">
                    <h2>{title}</h2>
                    <p>{children}</p>
                </div>

            </div>
        </header>
    );
};

export default Main;