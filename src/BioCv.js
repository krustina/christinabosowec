import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import NavBar from './NavBar.js';
import './App.css';

class BioCv extends Component {
    render() {

        return (
            <div className='main-container-2'>
                <NavBar />
                <div className='content-container'>
                    <div className='two-columns'>
                        <div className='bio'>
                            <div className='bio-img-container'>
                                <img src={require("./images/bio.jpg")} />
                            </div>
                            <div className='bio-text-container'>
                                <h1>BIO</h1>
                                <p>Christina Bosowec is an interdisciplinary artist, nanny and Doula living in Montreal, Quebec, Canada.</p>
                            </div>
                        </div>
                        <div className='cv'>
                            <h1>CV</h1>
                            {/* <br /> */}
                            <p className="bold">Education</p>
                            <p>2012-2015 - BFA in Interdisciplinary Arts, NSCAD University, Halifax, NS.</p>
                            <br />
                            <p>2010-2012 - Environmental Design, University of Manitoba, Winnipeg, MB.</p>
                            <br />
                            <p className="bold">Relevant Work Experience</p>
                            <ul>
                                <li>2016 - 04/2017 - Development Committee, Articule. <br/>Montreal, QC.</li>
                                <li>2013 - 05/2014 - VP Internal, Student Union of NSCAD University, <br/>Halifax, NS.</li> 
                                <li>2013 - 04/2014 - Coordinator, Free Coffee Publication, <br/>Halifax, NS.</li>
                                <li>2013 - 05/2014 - Anna Leonowens Committee Member, <br/>Halifax, NS.</li>
                                <li>2012 - 08/2012 - Summer Program Assistant, Manitoba Craft Council, <br/>Winnipeg, MB.</li>
                            </ul>
                            <br />
                            <p className="bold">Solo Exhibitions</p>
                            <ul>
                                <li>03/2017 - Bed of Roses, Flux Gallery, <br/>Winnipeg, MB.</li>
                                <li>03/2015 - Dodge Spirit, Anna Leonowens Gallery, <br/>Halifax, NS.</li>
                                <li>04/2014 - Glitter and Grit, Micro Gallery, <br/>Halifax, NS.</li>

                                <br />
                                <p className="bold">Group Exhibitions</p>
                                <li>08/2017 - Place Publique, Fonderie Darling,<br/> Montreal, QC. </li>
                                <li>06/2015 - Perform Vol. 3, The Khyber Centre for the Arts, <br/>Halifax, NS.</li>
                                <li>05/2015 - NSCAD Graduation Exhibition, Anna Leonowens Gallery, <br/>Halifax, NS.</li>
                                <li>04/2015 - No End of Insight, Media Landscape and Advanced Studio in Intermedia Group Show,
                                   NSCAD Academy Building, <br/>Halifax, NS.</li>
                                <li>12/2014 - Idea and Process Group Show, You're Welcome Gallery, <br/>Halifax, NS.</li>
                                <li>11/2014 - STRUTT Wearable Art Runway Show, <br/>St. Catharines, ON.</li>
                                <li>07/2014 - Inter Between/Among, Anna Leonowens Gallery, <br/>Halifax, NS.</li>
                                <li>04/2014 - NSCAD Wearable Art Show, The Marquee Club, <br/>Halifax, NS. </li>
                                <li>03/2014 - Mourning Week, A Better Place, <br/>Halifax, NS.</li>
                            </ul>
                            <br />
                            <p className="bold">Publications/Press – Print/Online</p>
                            <ul>
                                <li><a href='https://www.winnipegfreepress.com/arts-and-life/entertainment/arts/gentle-power-415703574.html'>03/2017 - Steven Leyden Cochrane, Gentle Power, Winnipeg Free Press.</a></li> 
                                <li><a href='https://weirdcanada.com/tag/christina-bosowec/'>01/2016 - Sophie Wonfor, Far Shores, Weird Canada.</a></li>
                                <li>12/2015 - Art School Smart Guide, Canadian Art.</li>
                                <li>06/2015 - Must-Sees This Week: June 18 to 24, Perform Vol. 3, Canadian Art. 05/2015 - NSCAD Graduation Publication.</li>
                                <li>11/2014 - STRUTT, STRUTT the unusual stuff, St. Catharines Standard. 04/2014 - Free Coffee, NSCAD Student Publication.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}

export default BioCv;