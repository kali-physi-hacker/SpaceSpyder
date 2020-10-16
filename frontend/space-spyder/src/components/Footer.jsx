import React from 'react';


const Footer = () => {
    return (
        <footer className="site-footer bg-dark py-5">
            <div className="container d-sm-flex justify-content-between align-items-center text-center">
                <div className="mb-4 mb-sm-0 ml-sm-4 order-sm-2">
                    <a className="social-btn sb-outline sb-light sb-facebook" href="#">
                        <i className="fe-facebook"></i>
                    </a>
                    <a className="social-btn sb-outline sb-light sb-twitter ml-2" href="#">
                        <i className="fe-twitter"></i>
                    </a>
                    <a className="social-btn sb-outline sb-light sb-instagram ml-2" href="#">
                        <i className="fe-instagram"></i>
                    </a>
                    <a className="social-btn sb-outline sb-light sb-google ml-2" href="#">
                        <i className="fe-google"></i>
                    </a>
                </div>
                <p className="font-size-sm mb-0 order-sm-1">
                    <span className="text-light opacity-50 mr-1">© All rights reserved. Made by</span>
                    <a className="nav-link-style nav-link-light" href={"#"}>Kali Junior Brown</a></p>
            </div>
        </footer>
    )
}

export default Footer;