import React from 'react';
import Main from '../../components/Main';
import './About.css';
import MainImg from '../../images/header_bg_1.jpg';
import storyImg from '../../images/about1.jpg';
import visionImg from '../../images/about2.jpg';
import missionImg from '../../images/about3.jpg';

const About = () => {
    return (
        <>
            <Main title='About Us' image={MainImg}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam minima enim aperiam illo quos sint minus repellendus laborum nulla vero.
            </Main>

            <section className="about-story">
                <div className="container about-sContainer">

                    <div className="about-img">
                        <img src={storyImg} alt="" />
                    </div>

                    <div className="about-content">
                        <h1>Our Story</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt voluptatum veniam voluptas facilis adipisci modi voluptatem hic sit quasi amet nisi quibusdam reiciendis est laboriosam fuga repellendus eius asperiores neque necessitatibus qui velit repellat dicta. Laborum necessitatibus dolores aut natus, repudiandae et dolor laboriosam quia maiores beatae ea. Consectetur.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum eius, autem quibusdam illum accusantium sed facilis veniam corporis dignissimos qui, fugiat corrupti, perferendis debitis in natus ipsam optio. Repellendus qui quisquam quo tempora aliquam?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut natus nobis totam dolorum perferendis praesentium, sapiente unde a, quibusdam voluptatum quo tempore, eum quidem.</p>
                    </div>

                </div>
            </section>

            <section className="about-vision">
                <div className="container vision-sContainer">

                    <div className="about-content">
                        <h1>Our Vision</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt voluptatum veniam voluptas facilis adipisci modi voluptatem hic sit quasi amet nisi quibusdam reiciendis est laboriosam fuga repellendus eius asperiores neque necessitatibus qui velit repellat dicta. Laborum necessitatibus dolores aut natus, repudiandae et dolor laboriosam quia maiores beatae ea. Consectetur.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum eius, autem quibusdam illum accusantium sed facilis veniam corporis dignissimos qui, fugiat corrupti, perferendis debitis in natus ipsam optio. Repellendus qui quisquam quo tempora aliquam?</p>
                    </div>

                    <div className="about-img">
                        <img src={visionImg} alt="" />
                    </div>

                </div>
            </section>

            <section className="about-mission">
                <div className="container mission-sContainer">

                    <div className="about-img">
                        <img src={missionImg} alt="" />
                    </div>

                    <div className="about-content">
                        <h1>Our Mission</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt voluptatum veniam voluptas facilis adipisci modi voluptatem hic sit quasi amet nisi quibusdam reiciendis est laboriosam fuga repellendus eius asperiores neque necessitatibus qui velit repellat dicta. Laborum necessitatibus dolores aut natus, repudiandae et dolor laboriosam quia maiores beatae ea. Consectetur.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum eius, autem quibusdam illum accusantium sed facilis veniam corporis dignissimos qui, fugiat corrupti, perferendis debitis in natus ipsam optio. Repellendus qui quisquam quo tempora aliquam?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut natus nobis totam dolorum perferendis praesentium, sapiente unde a, quibusdam voluptatum quo tempore, eum quidem.</p>
                    </div>

                </div>
            </section>
        </>
    );
};

export default About;