import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import DoulaServicesDropdown from './DoulaServicesDropdown.js';
import './App.css';

const services = [
    {
        key: 1,
        servicetitle: "Birth Support",
        servicedesc: "Birth support provides emotional and non-medical support while navigating the stages of pregnancy, birth and postpartum. Evidence based information about pregnancy, the birth process, and postpartum period is shared to help the birthing person make informed decisions for themselves and their baby. The birthing person’s needs, hopes and priorities are also a focus along with any concerns or fears they may have around birth. Birth support also includes:",
        package1title: "Birth Package -",
        package1price: " $950",
        package1pricedetails:[""],
        package1desc: [
            "Up to three 2 hour prenatal visits to prepare for birth",
            "In-person support throughout labour and birth", 
            "Phone, text and email support",
            "On-call support at 37 weeks",
            "One postpartum visit after birth"
        ],
        package2title: "Birth and Postpartum Package -",
        package2price: " $1200",
        package2pricedetails:[""],
        package2desc: [
            "Up to three 2 hour prenatal visits to prepare for birth",
            "In-person support throughout labour and birth",
            "Phone, text and email support", 
            "On-call support at 37 weeks",
            "Plus 12 postpartum hours",
        ]
    },
    {
        key: 2,
        servicetitle: "Antepartum Support",
        servicedesc: "Emotional and practical support is given to a pregnant person who is on bed rest and in need of extra support during their pregnancy. Support may include household tasks like light cleaning and laundry, cooking and meal planning or sibling care. It can also include things like running a warm bath, tucking you into bed along with:",
        package1title: "",
        package1price: "",
        package1pricedetails:[""],
        package1desc: [
            "Phone, text and email support",
            "Emotional and informational support",
            "Cooking, light house work and errands",
            "Sibling and pet care",
        ],
        package2title: "",
        package2price: "",
        package2pricedetails:[
            "6 hours for $205",
            "12 hours for $395",
            "24 hours for $765",
            "48 hours for $1390",
        ],
        package2desc: [
            "Antepartum support is $35/hour with a minimum 3 hours per visit or:"
        ]
    },
    {
        key: 3,
        servicetitle: "Postpartum Support",
        servicedesc: "Families are deserving of support during the postpartum period to ensure that their transition into parenthood is as smooth as possible. Parents and family receive support and information on baby care basics and postpartum healing, plus the help of light housework, cooking of meals, baby holding, walking pets, or just filling in when the parent needs some rest. Support also includes:",
        package1title: "",
        package1price: "",
        package1pricedetails:[""],
        package1desc: [
            "Phone, text and email support",
            "Emotional and physical support",
            "Postpartum healing", 
            "Newborn care and infant feeding support", 
            "Sharing of community resources",
            "Cooking, light house work and errands"
        ],
        package2title: "",
        package2price: "",
        package2pricedetails:[
            "6 hours for $205",
            "12 hours for $395",
            "24 hours for $765",
        ],
        package2desc: [
            "Postpartum support is $35/hour with a minimum 3 hours per visit or:"
        ],
    },
    {
        key: 4,
        servicetitle: "Abortion, Termination and Pregnancy Loss Support",
        servicedesc: "Ending a pregnancy, whether chosen or not can be a difficult experience and is deserving of sensitive and compassionate care. Unconditional support is given to anyone considering an abortion, terminating a pregnancy or in the midst of a loss. Support is customized to the specific need of each individual and may include by not limited to:",
        package1title: "",
        package1price: "",
        package1pricedetails:[""],
        package1desc: [
            "Information and resources", 
            "Phone and text support", 
            "Accompaniment to and from appointments", 
            "Holistic healing", 
            "The planning of a ritual or ceremony,", 
            "or just being there to listen.",
        ],
        package2title: "",
        package2price: "",
        package2pricedetails:[""],
        package2desc: [""],
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
                        <img className='doula-image'></img>
                        <div className='doula-services-options'>
                            <div>
                                {services.map((service, i) =>
                                    <DoulaServicesDropdown key={i} service={service}/>
                                    )}
                            </div>
                            <h2 className='fine-print'>
                                <b>Please contact me on how I can support you best.</b>
                            <br/>
                            <br/>
                                * Pregnancy Loss and Termination support is free or pay what you can. 
                            <br/>
                            <br/>
                                * All prices are inclusive of tax. Sliding scale rates are also available.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default DoulaServices;