import React from "react";
import Base from "./Base";

import mapImg from '../assets/img/pages/contacts/map-img.png'


const BgShape = () => {
    return (
        <section className="position-relative bg-gradient" style={{height: 590}}>
            <div className="cs-shape cs-shape-bottom cs-shape-curve-side bg-body">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 250">
                    <g>
                        <path fill="currentColor" d="M3000,0v250H0v-51c572.7,34.3,1125.3,34.3,1657.8,0C2190.3,164.8,2637.7,98.4,3000,0z"></path>
                    </g>
                </svg>
            </div>
        </section>
    )
}


const ContactDetails = () => {
    return (
        <section className="container bg-overlay-content pt-7" style={{marginTop: -590}}>
            <div className="row pt-md-4 pt-lg-5 mt-3">
                <div className="col-lg-4 col-md-5 offset-lg-1">
                    <h1 className="text-light mb-3 pb-4 pt-sm-3">Contacts</h1>
                    <div className="d-flex mb-4"><i className="fe-map-pin h3 mb-2 text-light mt-1"></i>
                        <div className="pl-3">
                            <p className="text-light mb-2">123 Kusie Ave, Lapaz,<br />GA 12345, Ghana</p><a
                            className="cs-fancy-link text-light font-size-sm" href="#map" data-scroll>See on the map</a>
                        </div>
                    </div>
                    <div className="d-flex mb-4"><i className="fe-mail h3 mb-2 text-light"></i>
                        <div className="pl-3"><a className="d-inline-block text-light text-decoration-none mb-2"
                                                 href="mailto:contact@example.com">desmond@gradia.net</a></div>
                    </div>
                    <div className="d-flex mb-4"><i className="fe-phone h3 mb-2 text-light"></i>
                        <div className="pl-3"><a className="d-inline-block text-light text-decoration-none mb-2"
                                                 href="tel:+15262200459">+233 123 456 789</a></div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-7">
                    <div className="card border-0 box-shadow-lg">
                        <div className="card-body py-5 px-3 px-sm-4">
                            <h2 className="h3 text-center">Drop us a line</h2>
                            <p className="font-size-sm text-muted text-center">We normally respond within 2 business
                                days</p>
                            <form className="needs-validation pt-2 px-md-3" noValidate>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label className="form-label" htmlFor="cont-fn">Full name<sup
                                            className="text-danger ml-1">*</sup></label>
                                        <input className="form-control" type="text" id="cont-fn" placeholder="Desmond Brown"
                                               required />
                                            <div className="invalid-feedback">Please enter your full name!</div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label className="form-label" htmlFor="cont-email">Email address<sup
                                            className="text-danger ml-1">*</sup></label>
                                        <input className="form-control" type="email" id="cont-email"
                                               placeholder="dbrown@email.com" required />
                                            <div className="invalid-feedback">Please enter a valid email address!</div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cont-subject">Subject<sup
                                        className="text-danger ml-1">*</sup></label>
                                    <input className="form-control" type="text" id="cont-subject"
                                           placeholder="Title of your message" required />
                                        <div className="invalid-feedback">Please enter a subject!</div>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="cont-message">Message<sup
                                        className="text-danger ml-1">*</sup></label>
                                    <textarea className="form-control" id="cont-message" rows="5"
                                              placeholder="Write your message here" required></textarea>
                                    <div className="invalid-feedback">Please write a message!</div>
                                </div>
                                <div className="text-center pt-2">
                                    <button className="btn btn-primary" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


const MapSection = () => {
    return (
        <section className="container py-5 py-md-6 py-lg-7">
            <div className="row py-sm-3">
                <div className="col-md-7">
                    <div className="cs-gallery" id="map"><a
                        className="cs-gallery-item cs-map-popup bg-position-center bg-no-repeat py-7 text-center border rounded-lg"
                        href="../../www.google.com/maps/embed04d9.html?pb=!1m18!1m12!1m3!1d193595.91476818218!2d-74.11976253858133!3d40.69740344296443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sua!4v1568574342685!5m2!1sen!2sua"
                        data-iframe="true"
                        data-sub-html="&lt;h6 class=&quot;font-size-sm text-light&quot;&gt;396 Lillian Blvd, Holbrook, NY 11741&lt;/h6&gt;"
                        style={{backgroundImage: `url(${mapImg})`}}><span
                        className="cs-gallery-caption"><i className="fe-maximize-2 font-size-xl mt-n1 mr-2"></i>Expand the map</span>
                        <div className="d-inline-block py-4 py-sm-7"><img width="48" src="img/pages/contacts/marker.png"
                                                                          alt="Map marker"/>
                        </div>
                    </a></div>
                </div>
                <div className="col-md-4 offset-md-1 pt-4">
                    <h2 className="h4 pb-3">How to get there</h2>
                    <h3 className="h5">Subway</h3>
                    <ul className="list-unstyled font-size-sm">
                        <li>5 mins south 66 Lapaz N1 Road</li>
                        <li>10 mins west 59 Achimota Market</li>
                    </ul>
                    <h3 className="h5">Busses</h3>
                    <ul className="list-unstyled font-size-sm mb-4 pb-2">
                        <li>Public busses #1 and #2</li>
                    </ul>
                    <h2 className="h4 pb-2">Working hours</h2>
                    <ul className="list-unstyled font-size-sm">
                        <li><span className="text-heading font-size-base mr-1">Mon - Fri:</span>9AM - 8PM</li>
                        <li><span className="text-heading font-size-base mr-1">Sat:</span>10AM - 5PM</li>
                        <li><span className="text-heading font-size-base mr-1">Sun:</span><span
                            className="text-danger">Closed</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

const Contact = () => {
    return (
        <Base contact={true} navbar={true} footer={true}>
            <BgShape />
            <ContactDetails />
            <MapSection />
        </Base>
    )
}


export default Contact