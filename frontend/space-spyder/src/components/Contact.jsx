import React from "react";


const ContactSection = () => {
    return (
        <section className="bg-secondary" style={{marginTop: -300, paddingTop: 300}}>
            <div className="container pt-5 pb-6 py-md-7">
                <h2 className="text-center mb-5">Contacts</h2>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0 mx-auto">
                        <form className="needs-validation mb-4 pb-2" noValidate>
                            <div className="input-group-overlay form-group">
                                <div className="input-group-prepend-overlay">
                                    <span className="input-group-text">
                                        <i className="fe-user"></i>
                                    </span>
                                </div>
                                <input className="form-control prepended-form-control" type="text" placeholder="Name"
                                       required />
                            </div>
                            <div className="input-group-overlay form-group">
                                <div className="input-group-prepend-overlay">
                                    <span className="input-group-text">
                                        <i className="fe-mail"></i>
                                    </span>
                                </div>
                                <input className="form-control prepended-form-control" type="email" placeholder="Email"
                                       required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="4" placeholder="Message" required></textarea>
                            </div>
                            <div className="row pt-2">
                                <div className="col-sm-6">
                                    <button className="btn btn-primary btn-block" type="submit">Send Request</button>
                                </div>
                            </div>
                        </form>
                        <div className="row">
                            <div className="col">
                                <h5>Spacyder Inc</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-0">123, Kusie Avenue, Lapaz</li>
                                    <li className="mb-0">Greater Accra, Ghana</li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <h5>Collaboration</h5>
                                <ul className="list-unstyled mb-0">
                                    <li className="mb-0">+ 1 234 567 890</li>
                                    <li className="mb-0">email@email.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ContactSection;
