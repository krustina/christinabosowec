import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBarDoula from './NavBarDoula.js';
import Footer from './Footer.js';
import './App.css';



var link = <a href={'https://www.ncbi.nlm.nih.gov/pubmed/28681500'}>Research</a>;

const FAQ = [
    {
        key: 1,
        question: 'What is a Doula?',
        answer: 'A doula is someone who guides pregnant people through their pregnancy experiences while offering them the love and compassion they need. doulas are trained to provide emotional, physical and informational support.',
    },
    {
        key: 2,
        question: 'What is the difference between a Midwife and a Doula?',
        answer: 'Midwives are health professionals who care for people with low-risk pregnancies during pregnancy, birth, and the postpartum period. The clinical care a midwife provides is similar to the care you would get from a doctor during pregnancy: advice to help you have a healthy pregnancy and birth, prenatal exams and routine testing, attendance and support during birth, and follow-up visits postpartum. While a midwife provides clinical care, a birth doula provides emotional and physical support throughout pregnancy and labour. A doula is a non-clinical support person who helps you through the process of being pregnant and having a baby, and helps you adapt after birth during the transition into parenthood.',
    },
    {
        key: 3,
        question: 'What is a Full Spectrum Doula?',
        answer: 'Although people often associate doulas with childbirth and parenting, some doulas - often called full spectrum doulas – provide support during all pregnancy outcomes. Full spectrum doula work is based on a deep understanding that people have many different experiences of pregnancy, and have similarly diverse needs for care and support. A full spectrum doula supports people whose pregnancies that end in abortion, miscarriage, stillbirth, or adoption, as well as those that end in birth and parenting.',
    },
    {
        key: 4,
        question: 'What are the benefits of a Doula?',
        answer: " has shown that non-judgmental, emotional and practical support from early pregnancy and onward, and continuous labour support during birth, can help to create a more satisfying birth experience with less need for medical interventions. A positive birth experience can help to  build confidence in new parents and ease their transition into parenthood. This results in healthier outcomes for parents and babies. today many doulas now reach beyond birth and extend their support to people of all pregnancy outcomes including: miscarriage, a planned abortion or termination, stillbirth, surrogacy or adoption. Studies show that support during these times can help with the individual's overall satisfaction, emotional state and encourage a sense of personal empowerment."
    }
]

class DoulaFAQ extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div className='main-container-2'>
                <NavBarDoula />
                <div className='doula-content-container'>
                <h1 className='doula-section-subtitle'>F.A.Q</h1>
                    <div className='doula-faq-main-container'>
                        {FAQ.map((info, i) => {
                            if (info.key == 4) {
                                return (
                                    <div className='doula-faq-sub-container'>
                                        <div className='doula-faq'>
                                            <h1>{info.question}</h1>
                                            <h2><a style={{ textDecoration: 'underline', color: 'blue' }} target="_blank" href="https://www.ncbi.nlm.nih.gov/pubmed/28681500">Research</a>{info.answer}</h2>
                                        </div>
                                        <img className='curved-line' src={require('./images/curve.png')} />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className='doula-faq-sub-container'>
                                        <div className='doula-faq'>
                                            <h1>{info.question}</h1>
                                            <h2>{info.answer}</h2>
                                        </div>
                                        <img className='curved-line' src={require('./images/curve.png')} />
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                </div>
                <Footer/>
            </div>

        );

    }
}

export default DoulaFAQ