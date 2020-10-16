import React from "react";
import Countdown from "react-countdown";

import Base from "../Base";

import comingSoonSvg from '../../assets/img/pages/coming-soon/illustration.svg'


const FooterSection = () => {
    return (
        <footer className="cs-footer container text-center pb-4">
            <a className="nav-link-style mb-2" href="tel:+15262200459">+ 1 526 220 0459</a><br />
            <a className="nav-link-style mb-2" href="mailto:contact@example.com">desmond@spacyder.net</a>
            <div className="pt-4 pb-3">
                <a className="social-btn sb-outline sb-facebook mx-2 mb-2" href="#">
                    <i className="fe-facebook"></i>
                </a>
                <a className="social-btn sb-outline sb-twitter mx-2 mb-2" href="#">
                    <i className="fe-twitter"></i>
                </a>
                <a className="social-btn sb-outline sb-instagram mx-2 mb-2" href="#">
                    <i className="fe-instagram"></i>
                </a>
                <a className="social-btn sb-outline sb-google mx-2 mb-2" href="#">
                    <i className="fe-google"></i>
                </a>
            </div>
        </footer>
    )
}


const ComingSoon = () => {

    return (
        <Base light={true}>
            <div className="container d-flex flex-column justify-content-center py-5" style={{flex: "1 0 auto"}}>
                <div className="row align-items-center pb-2">
                    <div className="col-xl-5 col-md-6 text-center text-md-left mb-5 mb-md-0">
                        <h1 className="mb-3">Coming soon...</h1>
                        <p className="mb-grid-gutter">We are working hard to deliver best possible experience. The
                            website is currently under construction. <u>It goes live in:</u></p>
                        <div className="cs-countdown h2 justify-content-center justify-content-md-start"
                             data-countdown="10/01/2021 07:00:00 PM">
                            <Countdown date={Date.now() + 31536000000} />
                        </div>
                        <p className="pt-4">Let me know when your website is live.</p>
                        <form className="d-flex align-items-start needs-validation" noValidate="">
                            <div className="mr-2 mr-sm-3 w-100">
                                <input className="form-control" type="email" placeholder="Email address" required="" />
                                    <div className="invalid-tooltip">Please provide a valid email address!</div>
                            </div>
                            <button className="btn btn-primary" type="submit">Notify Me</button>
                        </form>
                    </div>
                    <div className="col-md-6 offset-xl-1"><img className="d-block mx-auto"
                                                               src={comingSoonSvg}
                                                               alt="Illustration" />
                    </div>
                </div>
            </div>
            <FooterSection />
        </Base>
    )
}


export default ComingSoon;