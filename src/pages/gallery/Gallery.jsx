import React from 'react';
import Main from '../../components/Main';
import mainImg from '../../images/header_bg_3.jpg';

import './Gallery.css';

const Gallery = () => {
    const galleryLength = 15;
    const images = []
    for (let i = 1; i <= galleryLength; i++) {

        images.push(require(`../../images/gallery${i}.jpg`))
    }
    return (
        <>
            <Main title='Our Gallery' image={mainImg}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe dicta, pariatur velit ad aliquam!
            </Main>

            <section className="gallery">
                <div className="container gallery-container">
                    {
                        images.map((img, index) => {
                            return <article key={index}>
                                <img src={img} alt="" className="imgbb" />
                            </article>
                        })
                    }


                </div>
            </section>
        </>
    );
};

export default Gallery;