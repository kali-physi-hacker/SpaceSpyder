import React from "react";

import cubeIcon from '../assets/img/demo/coworking/icons/cube.svg'
import showerIcon from '../assets/img/demo/coworking/icons/cube.svg'
import hours24 from '../assets/img/demo/coworking/icons/24-hours.svg'
import buildingIcon from '../assets/img/demo/coworking/icons/building.svg'
import parkingIcon from '../assets/img/demo/coworking/icons/parking.svg'

const AboutSection = () => {

    const aboutContent = "Spacyder Incorporation is a reserved authorized and legal" +
        "institution that provides you space crawling functionalities. We help you" +
        "find the best organization space for all your events";

    return (
        <section className="container mt-4 pt-5 mt-md-2 pt-md-7 pb-6">
            <h2 className="text-center mb-3">About Around</h2>
            <div className="row justify-content-center mb-5 pb-2">
                <div className="col-xl-6 col-lg-7">
                    <p className="text-center mb-0">{aboutContent}</p>
                </div>
            </div>
            <div className="cs-carousel">
                <div className="cs-carousel-inner"
                     data-carousel-options="{&quot;items&quot;: 5, &quot;controls&quot;: false, &quot;gutter&quot;: 15, &quot;responsive&quot;: {&quot;0&quot;:{&quot;items&quot;:2}, &quot;410&quot;:{&quot;items&quot;:3}, &quot;580&quot;:{&quot;items&quot;:4}, &quot;740&quot;:{&quot;items&quot;:5}}}">
                    <div className="text-center"><img className="mb-3" width="54"
                                                      src={cubeIcon} alt="Total Area"/>
                        <div className="text-muted" style={{fontSize: "2.25rem"}}>62</div>
                        <h3 className="h5">Total Area</h3>
                    </div>
                    <div className="text-center"><img className="mb-3" width="54"
                                                      src={showerIcon} alt="Showers"/>
                        <div className="text-muted" style={{fontSize: "2.25rem"}}>5</div>
                        <h3 className="h5">Showers</h3>
                    </div>
                    <div className="text-center"><img className="mb-3" width="54"
                                                      src={hours24} alt="24/7 Access"/>
                        <div className="text-muted" style={{fontSize: "2.25rem"}}>24/7</div>
                        <h3 className="h5">Access</h3>
                    </div>
                    <div className="text-center"><img className="mb-3" width="54"
                                                      src={buildingIcon} alt="3 Full Floors"/>
                        <div className="text-muted" style={{fontSize: "2.25rem"}}>3</div>
                        <h3 className="h5">Full Floors</h3>
                    </div>
                    <div className="text-center"><img className="mb-3" width="54"
                                                      src={parkingIcon} alt="Parking"/>
                        <div className="text-muted" style={{fontSize: "2.25rem"}}>2</div>
                        <h3 className="h5">Car Parking</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;