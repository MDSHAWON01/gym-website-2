import React from 'react';
import Faqs from '../../components/Faqs';
// import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Programs from '../../components/Programs';
import Testimonials from '../../components/Testimonials';
import Values from '../../components/Values';
import './Home.css';

const Home = () => {
    return (

        <>
            <Header />
            <Programs />
            <Values />
            <Faqs />
            <Testimonials />

        </>
    );
};

export default Home;