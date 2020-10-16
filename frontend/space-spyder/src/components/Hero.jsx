import React, {useState} from "react";

import heroBg from '../assets/img/demo/coworking/hero-bg.jpg'


const Hero = () => {
    const [spaceName, setSpaceName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [companySize, setCompanySize] = useState("");
    // const [spaceName, setSpaceName] = useState("");
    return (
        <section className="jarallax bg-dark py-6 py-md-7" data-jarallax data-type="scale-opacity" data-speed="0.09">
            <div className="jarallax-img" style={{backgroundImage: `url(${heroBg})`}}></div>
            <div className="container py-md-3">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-10">
                        <div className="bg-light rounded-lg box-shadow-lg py-5 px-4">
                            <form className="py-sm-2 px-sm-3">
                                <h1 className="text-center mb-4">Reserve your spot</h1>
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                        <label className="form-label" htmlFor="rf-space">Space</label>
                                        <select defaultValue={"Coworking main room"} className="fotm-control custom-select" id="rf-space">
                                            <option value="Coworking main room">Coworking main room</option>
                                            <option value="Coworking terrace">Coworking terrace</option>
                                            <option value="Skype room 1">Skype room 1</option>
                                            <option value="Skype room 2">Skype room 2</option>
                                            <option value="Meeting room 1">Meeting room 1</option>
                                            <option value="Meeting room 2">Meeting room 2</option>
                                            <option value="Gaming room">Gaming room</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label className="form-label" htmlFor="rf-company-size">Company size</label>
                                        <input className="form-control" type="number" value={companySize} onChange={(e)=> setCompanySize(e.target.value)}
                                               placeholder="How many people" id="rf-company-size" />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label className="form-label" htmlFor="rf-date">Start Date and time</label>
                                        <div className="input-group-overlay">
                                            <input className="form-control appended-form-control cs-date-picker"
                                                   type="text" placeholder="Choose date / time"
                                                   data-datepicker-options="{&quot;enableTime&quot;: true, &quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y H:i&quot;, &quot;dateFormat&quot;: &quot;Y-m-d H:i&quot;, &quot;minDate&quot;: &quot;today&quot;}"
                                                   id="rf-date" value={startDate} onChange={(e)=> setStartDate(e.target.value)} />
                                                <div className="input-group-append-overlay"><span
                                                    className="input-group-text"><i className="fe-calendar"></i></span>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 form-group">
                                        <label className="form-label" htmlFor="rf-date">End Date and time</label>
                                        <div className="input-group-overlay">
                                            <input className="form-control appended-form-control cs-date-picker"
                                                   type="text" placeholder="Choose date / time"
                                                   data-datepicker-options="{&quot;enableTime&quot;: true, &quot;altInput&quot;: true, &quot;altFormat&quot;: &quot;F j, Y H:i&quot;, &quot;dateFormat&quot;: &quot;Y-m-d H:i&quot;, &quot;minDate&quot;: &quot;today&quot;}"
                                                   id="rf-date" value={endDate} onChange={(e)=> setEndDate(e.target.value)} />
                                                <div className="input-group-append-overlay"><span
                                                    className="input-group-text"><i className="fe-calendar"></i></span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center pt-2">
                                    <div className="col-sm-6 mb-4 mb-sm-0"><a href="tel:+2335262200459"><i
                                        className="fe-phone font-size-xl mr-2"></i>+ 233 526 220 0459</a></div>
                                    <div className="col-sm-6">
                                        <button className="btn btn-primary btn-block" type="submit">Reserve</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero;