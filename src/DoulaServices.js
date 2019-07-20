import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import Footer from './Footer.js';
import DoulaServicesDropdown from './DoulaServicesDropdown.js';
import './App.css';

const services = [
    {
        key: 1,
        servicetitle: "Birth Support",
        servicedesc: "As a birth doula, I provide emotional and practical support as you navigate pregnancy, birth and the postpartum period. Throughout each stage of this process, I share evidence-based information to help the birthing person make informed decisions for themselves and their baby. I focus on the birthing person’s needs, hopes and priorities along with any concerns or fears they may have around birth.",
        package1title: "Birth Package -",
        package1price: " $850",
        package1pricedetails: [""],
        package1desc: [
            "Up to three 2 hour prenatal visits to prepare for birth",
            "In-person support throughout labour and birth",
            "Phone, text and email support",
            "On-call support at 37 weeks",
            "One postpartum visit after birth"
        ],
        package2title: "Birth and Postpartum Package -",
        package2price: " $1100",
        package2pricedetails: [""],
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
        servicedesc: "Antepartum support includes emotional and practical support for a pregnant person on bed rest who may need additional help during this stage of their pregnancy. The support that I offer includes light housework (such as laundry), cooking and meal planning or sibling care. It can also include things like running a warm bath or tucking you into bed.",
        package1title: "Antepartum support is $35/hour with a minimum 3 hours per visit or:",
        package1price: "",
        package1pricedetails: [""],
        package1desc: [
            "6 hours for $174",
            "12 hours for $336",
            "24 hours for $648"
        ],
        package2title: "",
        package2price: "",
        package2pricedetails: [],
        package2desc: [
            
        ]
    },
    {
        key: 3,
        servicetitle: "Postpartum Support",
        servicedesc: "New parents and families deserve support during the postpartum period to make their transition into parenthood as smooth as possible. I offer support and information on baby care basics and postpartum healing, as well as help with light housework, cooking, baby-holding, pet care, or just filling in when the parent needs some rest.",
        package1title: "Postpartum support is $30/ hour with a minimum 3 hours per visit or:",
        package1price: "",
        package1pricedetails: [],
        package1desc: [
            "6 hours for $174",
            "12 hours for $336",
            "24 hours for $648",
            "36 hours for $936",
            "48 hours for $1200"
        ],
        package2title: "Overnight support is $232 and includes:",
        package2price: "",
        package2pricedetails: [],
        package2desc: [
            "8 hours of overnight support",
            "Baby care while parent sleeps",
            "Night time infant feeding support",
        ],
    },
    {
        key: 4,
        servicetitle: "Pregnancy Loss and Termination Support",
        servicedesc: "The end of a pregnancy can be a difficult experience. Regardless of the circumstances in which your pregnancy ends, you deserve compassionate care that meets your needs. I offer unconditional support to anyone who is in the midst of a loss or considering terminating a pregnancy. I approach pregnancy loss and termination support with sensitivity, understanding that some people who choose to end a pregnancy may also have feelings of loss or grief. As part of this support, I can provide information and resources, accompany you to appointments, assist in holistic healing or just be there to listen. Please contact me to discuss how I can support you best",
        package1title: "* Pregnancy Loss and Termination support is free or pay what you can.",
        package1price: "",
        package1pricedetails: [""],
        package1desc: [
        ],
        package2title: "",
        package2price: "",
        package2pricedetails: [""],
        package2desc: [],
    }
]

class DoulaServices extends Component {
    componentDidMount(){
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                <h1 className='doula-section-subtitle'>Services</h1>
                    <div className='doula-services-main-container'>
                        {services.map((service, i) =>
                            <DoulaServicesDropdown key={i} service={service} />
                        )}
                    </div>
                    <div className="floater">
                        <h2>How can I support you best?
                            <br/>
                            <br/>
                            <Link to="doula_contact">Contact me!</Link>
                        </h2>
                    </div>
                    <h2 className='fine-print'>
                        * All prices are inclusive of tax. Sliding scale rates are also available
                    </h2>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DoulaServices;