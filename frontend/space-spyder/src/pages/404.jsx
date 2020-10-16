import React from "react";

import notFoundSvg from '../assets/img/pages/404/404-illustration.svg';
import Base from "./Base";

const NotFound = () => {
    return (
        <Base navbar={true} light={true}>
            <div className="container d-flex flex-column justify-content-center pt-5 mt-n6" style={{flex: "1 0 auto"}}>
                <div className="pt-7 pb-5">
                    <div className="text-center mb-2 pb-4">
                        <h1 className="mb-grid-gutter"><img className="d-inline-block"
                                                            src={notFoundSvg} alt="Error 404"/><span
                            className="sr-only">Error 404</span><span
                            className="d-block pt-3 font-size-sm font-weight-semibold text-danger">Error code: 404</span>
                        </h1>
                        <h2>Page not found!</h2>
                        <p className="pb-2">It seems we can’t find the page you are looking for.</p><a
                        className="btn btn-translucent-primary mr-3" href="/">Go to homepage</a><span>Or try</span>
                    </div>
                    <div className="input-group-overlay mx-auto" style={{maxWidth: 390}}>
                        <div className="input-group-prepend-overlay"><span className="input-group-text"><i
                            className="fe-search"></i></span></div>
                        <input className="form-control prepended-form-control" type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
        </Base>
    )
}


export default NotFound;