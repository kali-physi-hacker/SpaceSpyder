import React from "react";
import {Link} from 'react-router-dom';

import Base from "./Base";

import introBg from '../assets/img/pages/about/bg-shape.svg'


const Intro = () => {
    const aboutContent = "We all know how hard it is is to find a cooperate space for " +
        "an event. Our goal is to reduce the difficulty of event organizers having to " +
        "finding a cooperate space any space for events while helping space owners market" +
        "their space to the world"
    return (
        <section className="container my-lg-2 pt-5 pb-lg-7">
            <div className="row align-items-center">
                <div className="col-lg-5 py-3 py-lg-0">
                    <h1>Our goals. Our mission.</h1>
                    <h2 className="h3">How we help other companies to grow.</h2>
                    <div className="py-4">
                        <p className="cs-callout">{aboutContent}</p>
                    </div>
                    <Link to={'/coming-soon'} className="cs-video-btn cs-video-btn-primary cs-video-btn-sm mr-3">
                    </Link>
                    <span className="font-size-sm text-muted">Get to know us better</span>
                </div>
                <div className="col-xl-6 col-lg-7 offset-xl-1">
                    <div className="py-5" style={{minHeight: 543}}>
                        <div className="d-none d-lg-block position-absolute bg-no-repeat bg-position-center h-100"
                             style={{top: 0, left: -45, width: 646, backgroundImage: `url(${introBg})`}}></div>
                        <div className="row no-gutters mx-n2 pt-lg-4">
                            <div className="col-sm-4 px-2 mb-3"><a
                                className="card h-100 card-body py-5 justify-content-center border-0 box-shadow-lg text-center"
                                href="#"><i className="fe-zap text-primary h1 mb-3"></i>
                                <h3 className="h5 mb-0">Boost</h3></a></div>
                            <div className="col-sm-4 px-2 mb-3"><a
                                className="card card-body py-5 border-0 box-shadow-lg text-center mb-3" href="#"><i
                                className="fe-pie-chart text-danger h1 mb-3"></i>
                                <h3 className="h5 mb-0">Analize</h3></a><a
                                className="card card-body py-5 border-0 box-shadow-lg text-center" href="#"><i
                                className="fe-refresh-ccw text-info h1 mb-3"></i>
                                <h3 className="h5 mb-0">Automate</h3></a></div>
                            <div className="col-sm-4 px-2 mb-3"><a
                                className="card card-body py-5 border-0 box-shadow-lg text-center mb-3" href="#"><i
                                className="fe-folder-plus text-success h1 mb-3"></i>
                                <h3 className="h5 mb-0">Create</h3></a><a
                                className="card card-body py-5 border-0 box-shadow-lg text-center" href="#"><i
                                className="fe-share text-warning h1 mb-3"></i>
                                <h3 className="h5 mb-0">Share</h3></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <Base light={true} navbar={true} footer={true}>
            <Intro />
        </Base>
    )
}


export default About;