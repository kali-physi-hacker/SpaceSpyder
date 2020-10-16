import React from "react";

import benefitBgSvg from '../assets/img/demo/coworking/illustration01.svg';

import computerIcon from '../assets/img/demo/coworking/icons/tv.svg';
import tableTennisIcon from '../assets/img/demo/coworking/icons/table-tennis.svg';
import snacksIcon from '../assets/img/demo/coworking/icons/sandwich.svg';
import privateMeetingIcon from '../assets/img/demo/coworking/icons/living-room.svg';
import internetIcon from '../assets/img/demo/coworking/icons/router.svg';
import educationalIcon from '../assets/img/demo/coworking/icons/open-book.svg';


const BenefitIcon = props => {
    return (
        <div className="col-6 col-sm-4 text-center mb-grid-gutter">
            <img className="mb-2" width="46" src={props.icon} alt="Free computer"/>
            <h5 className="h6">{props.name}</h5>
        </div>
    )
}


const BenefitsSection = () => {
    return (
        <section className="container pb-5 pt-6 mb-md-2 py-md-7">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img className="d-block mx-auto" src={benefitBgSvg} alt="Illustration"/>
                </div>
                <div className="col-md-6 col-lg-5 offset-lg-1 pt-4 pt-md-0">
                    <h2 className="mt-4 mb-5 text-center text-md-left">Our benefits</h2>
                    <div className="row">
                        <BenefitIcon name={"Free computer"} icon={computerIcon} />
                        <BenefitIcon name={"Coffee and snacks"} icon={snacksIcon} />
                        <BenefitIcon name={"Relax zone"} icon={tableTennisIcon} />
                        <BenefitIcon name={"Private meeting room"} icon={privateMeetingIcon} />
                        <BenefitIcon name={"High-speed internet"} icon={internetIcon} />
                        <BenefitIcon name={"Educational programs"} icon={educationalIcon} />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BenefitsSection;