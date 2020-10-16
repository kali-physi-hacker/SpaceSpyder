import React from "react";

import loungeImg from '../assets/img/demo/coworking/gallery/th01.jpg'
import openSpaceImg from '../assets/img/demo/coworking/gallery/th02.jpg'
import kitchenImg1 from '../assets/img/demo/coworking/gallery/th03.jpg'
import kitchenImg2 from '../assets/img/demo/coworking/gallery/th04.jpg'
import kitchenImg3 from '../assets/img/demo/coworking/gallery/th05.jpg'
import openSpaceImg2 from '../assets/img/demo/coworking/gallery/th06.jpg'

const SpaceItem = props => {
    return (
        <div className="cs-grid-item" data-groups="[&quot;lounge&quot;]">
            <a className="cs-gallery-item rounded-lg" href="#"
                data-sub-html="&lt;h6 class=&quot;font-size-sm text-light&quot;&gt;Lounge room&lt;/h6&gt;">
                <img src={props.image} alt="Lounge room"/>
                <span className="cs-gallery-caption">{props.name}</span>
            </a>
        </div>
    )
}


const SpaceNavItem = props => {
    return (
        <li className="nav-item">
            <a className={`nav-link ${props.active ? "active" : ''}`} href="#" data-group={props.dataGroup}>{props.name}</a>
        </li>
    )
}


const SpacesSection = () => {
    return (
        <section className="bg-secondary py-5 py-md-6">
            <div className="container mt-4 mb-2 mt-md-2 mb-md-0">
                <h2 className="text-center mb-4 pb-2">Our space</h2>
                <div className="cs-masonry-filterable">
                    <ul className="cs-masonry-filters nav nav-tabs justify-content-center pb-4">
                        <SpaceNavItem active={true} dataGroup={'all'} name={'All'} />
                        <SpaceNavItem dataGroup={'open-space'} name={'Open space'} />
                        <SpaceNavItem dataGroup={'lounge'} name={'Lounge'} />
                        <SpaceNavItem dataGroup={'kitchen'} name={'Kitchen'} />
                    </ul>
                    <div className="cs-masonry-grid cs-gallery overflow-hidden" data-columns="3">
                        <SpaceItem name={'Lounge room'} image={loungeImg} />
                        <SpaceItem name={'Open space'} image={openSpaceImg} />
                        <SpaceItem name={'Kitchen'} image={kitchenImg1} />
                        <SpaceItem name={'Kitchen'} image={kitchenImg2} />
                        <SpaceItem name={'Kitchen'} image={kitchenImg3} />
                        <SpaceItem name={'Open space'} image={openSpaceImg2} />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default SpacesSection;