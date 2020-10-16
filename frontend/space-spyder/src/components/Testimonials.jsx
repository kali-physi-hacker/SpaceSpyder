import React from "react";

import testimonialsBgSvg from '../assets/img/demo/coworking/illustration02.svg'


const TestimonialItem = props => {
    return (
        <div className="pt-3">
            <blockquote className="blockquote mx-1">
                <p>{props.content}</p>
                <footer className="blockquote-footer">{props.attestant}</footer>
            </blockquote>
        </div>
    )
}


const TestimonialsSection = () => {
    const mockedContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor\n" +
        "incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices\n" +
        "gravida commodo consequat"
    const testimonials = [
        {name: "Desmond Brown", content: mockedContent, id:1},
        {name: "Kali Junior", content: mockedContent, id:2},
        {name: "Dr. Brown", content: mockedContent, id:3}
    ]

    return (
        <section className="container pb-5 mb-md-4 pb-md-7">
            <div className="row align-items-center">
                <div className="col-md-6 offset-lg-1 order-md-2">
                    <img className="d-block mx-auto" src={testimonialsBgSvg} alt="Illustration"/>
                </div>
                <div className="col-md-6 col-lg-5 order-md-1 pt-4 pt-md-0">
                    <h2 className="mt-4 mb-5 text-center text-md-left">What people say about us</h2>
                    <div className="cs-carousel">
                        <div className="cs-carousel-inner"
                             data-carousel-options="{&quot;nav&quot;: false, &quot;gutter&quot;: 20}">
                            {
                                testimonials.map(testimony=> (
                                    <TestimonialItem key={testimony.id} {...testimony} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default TestimonialsSection;