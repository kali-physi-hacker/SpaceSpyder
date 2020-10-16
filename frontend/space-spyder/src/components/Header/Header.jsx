import React from 'react';
import {Link} from 'react-router-dom';


const NavItem = props => {
    return (
        <li className={"nav-item"}>
            <Link to={props.to} className="nav-link">{props.text}</Link>
        </li>
    )
}


const Header = props => {
    const contactHeaderClasses = "navbar-expand-lg navbar-dark navbar-floating navbar-sticky"
    return (
        <header className={`cs-header navbar ${props.light ? 'navbar-expand-lg navbar-light navbar-sticky' : '' } ${props.contact ? contactHeaderClasses : ""}`} data-scroll-header>
            <div className="container px-0 px-xl-3">
                <button className="navbar-toggler ml-n2 mr-2" type="button" data-toggle="offcanvas"
                        data-offcanvas-id="primaryMenu"><span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand order-lg-1 mx-auto ml-lg-0 pr-lg-2 mr-lg-4 font-weight-bolder" to={'/'}>
                Spacyder
                </Link>
                <div className="d-flex align-items-center order-lg-3 ml-lg-auto">
                    <a className="nav-link-style font-size-sm text-nowrap" href="#modal-signin" data-toggle="modal"
                    data-view="#modal-signin-view"><
                        i className="fe-user font-size-xl mr-2"></i>Sign in
                    </a>
                    <a className={`btn ml-grid-gutter d-none d-lg-inline-block ${props.contact ? 'btn-translucent-light' : 'btn-primary'}`} href="#modal-signin"
                    data-toggle="modal" data-view="#modal-signup-view">Sign up
                    </a>
                </div>
                <div className="cs-offcanvas-collapse order-lg-2" id="primaryMenu">
                    <div className="cs-offcanvas-cap navbar-box-shadow">
                        <h5 className="mt-1 mb-0">Menu</h5>
                        <button className="close lead" type="button" data-toggle="offcanvas"
                                data-offcanvas-id="primaryMenu"><span aria-hidden="true">&times;</span></button>
                    </div>

                    <div className="cs-offcanvas-body">
                        <ul className="navbar-nav">
                            <NavItem to={'/'} text={"Home"}/>
                            <NavItem to={'/about'} text={'About Us'}/>
                            <NavItem to={'/contact'} text={'Contact'}/>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;