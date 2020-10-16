import React from "react";
import {Link} from 'react-router-dom';
import Base from './Base';
import Hero from "../components/Hero";
import AboutSection from "../components/About";

import vTourBg from '../assets/img/demo/coworking/virtual-tour-bg.jpg'
import vTourIcon from '../assets/img/demo/coworking/icons/360-tour.svg'
import SpacesSection from "../components/Spaces";
import BenefitsSection from "../components/Benefits";
import TestimonialsSection from "../components/Testimonials";
import ContactSection from "../components/Contact";
import ModalLogin from "../components/ModalLogin";

const VirtualTourSection = () => {
    return (
        <section className="jarallax bg-dark py-7" data-jarallax data-speed="0.25">
            <div className="jarallax-img" style={{backgroundImage: `url(${vTourBg})`}}></div>
            <div className="container text-center py-md-5">
                <Link className="d-inline-block bg-primary rounded-circle" to="/coming-soon">
                    <img width="195" src={vTourIcon} alt="360 VR Tour"/>
                </Link>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <Base light={true} navbar={true} footer={true}>
            <Hero />
            <AboutSection />
            <VirtualTourSection />
            <SpacesSection />
            <BenefitsSection />
            <TestimonialsSection />
            <ContactSection />
        </Base>
    )
}


export default Home;