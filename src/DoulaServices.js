import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import DoulaServicesOptions from './DoulaServicesOptions.js';
import './App.css';

const services = [
    {
        key: 1,
        servicetitle: "Birth Support",
        servicedesc: "Birth support provides emotional and non-medical support while navigating the stages of pregnancy, birth and postpartum. Evidence based information about pregnancy, the birth process, and postpartum period is shared to help the birthing person make informed decisions for themselves and their baby. The birthing person’s needs, hopes and priorities are also a focus along with any concerns or fears they may have around birth. Birth support also includes:"
    },
    {
        key: 2,
        servicetitle: "Antepartum Support",
        servicedesc: "Emotional and practical support is given to a pregnant person who is on bed rest and in need of extra support during their pregnancy. Support may include household tasks like light cleaning and laundry, cooking and meal planning or sibling care. It can also include things like running a warm bath, tucking you into bed along with:"
    },
    {
        key: 3,
        servicetitle: "Postpartum Support",
        servicedesc: "Families are deserving of support during the postpartum period to ensure that their transition into parenthood is as smooth as possible. Parents and family receive support and information on baby care basics and postpartum healing, plus the help of light housework, cooking of meals, baby holding, walking pets, or just filling in when the parent needs some rest. Support also includes:"
    },
    {
        key: 4,
        servicetitle: "Abortion, Termination and Pregnancy Loss Support",
        servicedesc: "Ending a pregnancy, whether chosen or not can be a difficult experience and is deserving of sensitive and compassionate care. Unconditional support is given to anyone considering an abortion, terminating a pregnancy or in the midst of a loss. Support is customized to the specific need of each individual and may include by not limited to: information and resources, phone and text support, accompaniment to and from appointments, holistic healing, the planning of a ritual or ceremony, or just being there to listen. Please contact me on how I can support you best."
    }
]

class DoulaServices extends Component {
    render() {

        return (
            <div className='main-container'>
                <NavBarDoula />
                <div className='doula-content-container'>
                    <h1>Services</h1>
                    <div className='doula-services-main-container'>
                        <img className='doula-service-image'></img>
                        <div className='doula-services-options'>
                            <div>
                                {services.map((service, i) =>
                                    <DoulaServicesOptions key={i} service={service}/>
                                    )}
                            </div>
                            <h2>* Pregnancy Loss and Termination support is free or pay what you can. <br/><br/>* All prices are inclusive of tax. Sliding scale rates are also available.</h2>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default DoulaServices;