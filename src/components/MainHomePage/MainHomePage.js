import React from 'react';
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import Testimonial from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import About from '../About/About';

const MainHomePage = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <About />
            <Products />
            <Testimonial />
            <Contact />
            <Footer />
        </>
    )
}

export default MainHomePage
