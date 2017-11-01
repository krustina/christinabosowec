// import React, { Component } from 'react';
// import Swiper from 'react-id-swiper';
// import './App.css';

// class Mobile extends Component {
//     render() {
//         const vParams = {
//             direction: 'vertical',
//             pagination: '.swiper-pagination-v',
//             paginationClickable: true,
//             keyboardControl: true,
//             nextButton: '.arrow-down'
//         }
//         const hParams = {
//             direction: 'horizontal',
//             pagination: '.swiper-pagination-h',
//             paginationClickable: true,
//             spaceBetween: 50,
//             keyboardControl: true,
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev'
//         }
//         return (
//             <div className="mobile">
//                 <Swiper {...vParams}>
//                     <div className="swiper-slide">
//                         <div className="main-container">
//                             <div className="content">
//                                 <img src={require("./images/x-tina-enter-outline5.png")} className="home-image" />
//                                 <h1 className="home-title">CHRISTINA<br />BOSOWEC</h1>
//                                  <div className="arrow-container">
//                                     <img src={require("./images/arrow-down-black.png")} className="arrow-down" />
//                                 </div> 
//                             </div>
//                         </div>
//                     </div>

//                     {/*nested swiper*/}
//                     <div className="swiper-slide">
//                         <Swiper {...hParams}>
//                             <div className="swiper-slide">
//                                 <div className="main-container">
//                                     <div className="work-icon-container">
//                                         <div className="work-icon">
//                                             <img src={require("./images/work_icons/roses.jpeg")} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* <div className="swiper-slide">
//                                 <div className="main-container">
//                                     <div className="work-icon-container">
//                                         <div className="work-icon">
//                                             <img src={require("./images/work_icons/dodge.jpeg")} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="swiper-slide">
//                                 <div className="main-container">
//                                     <div className="work-icon-container">
//                                         <div className="work-icon">
//                                             <img src={require("./images/work_icons/scrunchie.png") }/>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="swiper-slide">
//                                 <div className="main-container">
//                                     <div className="work-icon-container">
//                                         <div className="work-icon">
//                                             <img src={require("./images/work_icons/spongemeoff.jpg")} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div> */}
//                         </Swiper>
//                     </div>
//                     <div className="swiper-slide">
//                         <div className="main-container">
//                             <div className="bio-container">
//                                 <div><img src={require("./images/bio.jpg")} /></div>
//                                 <div className="text-container">
//                                     <h1 className="header">BIO</h1>
//                                     <p>
//                                         Christina Bosowec is an emerging interdisciplinary artist living in Montreal, Quebec, Canada.
//                                     </p>
//                                     <br />
//                                     <h1 className="header">CV</h1>
//                                     <p>CHRISTINA BOSOWEC
//                                   christina.a.bosowec@gmail.com</p>
//                                     <br />
//                                     <p className="bold">Education</p>
//                                     <p>2012-2015 - BFA in Interdisciplinary Arts, NSCAD University, Halifax, NS. 2010-2012 - Environmental Design, University of Manitoba, Winnipeg, MB.</p>
//                                     <br />
//                                     <p className="bold">Relevant Work Experience</p>
//                                     <ul>
//                                         <li>2016 - Current - Development Committee, Articule. Montreal, QC.</li>
//                                         <li>2013 - 05/2014 - VP Internal, Student Union of NSCAD University, Halifax, NS. 2013 - 04/2014 - Coordinator, Free Coffee Publication, Halifax, NS.</li>
//                                         <li>2013 - 05/2014 - Anna Leonowens Committee Member, Halifax, NS.</li>
//                                         <li>2012 - 08/2012 - Summer Program Assistant, Manitoba Craft Council, Winnipeg, MB.</li>
//                                     </ul>
//                                     <br />
//                                     <p className="bold">Solo Exhibitions</p>
//                                     <ul>
//                                         <li>03/2017 - Bed of Roses, Flux Gallery, Winnipeg, MB.</li>
//                                         <li>03/2015 - Dodge Spirit, Anna Leonowens Gallery, Halifax, NS. 04/2014 - Glitter and Grit, Micro Gallery, Halifax, NS.</li>

//                                         <br />
//                                         <p className="bold">Group Exhibitions</p>
//                                         <li>06/2015 - Perform Vol. 3, The Khyber Centre for the Arts, Halifax, NS.</li>
//                                         <li>05/2015 - NSCAD Graduation Exhibition, Anna Leonowens Gallery, Halifax, NS.</li>
//                                         <li>04/2015 - No End of Insight, Media Landscape and Advanced Studio in Intermedia Group Show,
//                                   NSCAD Academy Building, Halifax, NS.</li>
//                                         <li>12/2014 - Idea and Process Group Show, You're Welcome Gallery, Halifax, NS. 11/2014 - STRUTT Wearable Art Runway Show, St. Catharines, ON.</li>
//                                         <li>07/2014 - Inter Between/Among, Anna Leonowens Gallery, Halifax, NS. 04/2014 - NSCAD Wearable Art Show, The Marquee Club, Halifax, NS. 03/2014 - Mourning Week, A Better Place, Halifax, NS.</li>
//                                     </ul>
//                                     <br />
//                                     <p className="bold">Publications/Press – Print/Online</p>
//                                     <ul>
//                                         <li>03/2017 - Steven Leyden Cochrane, Gentle Power, Winnipeg Free Press. 01/2016 - Sophie Wonfor, Far Shores, Weird Canada.</li>
//                                         <li>12/2015 - Art School Smart Guide, Canadian Art.</li>
//                                         <li>06/2015 - Must-Sees This Week: June 18 to 24, Perform Vol. 3, Canadian Art. 05/2015 - NSCAD Graduation Publication.</li>
//                                         <li>11/2014 - STRUTT, STRUTT the unusual stuff, St. Catharines Standard. 04/2014 - Free Coffee, NSCAD Student Publication.</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Swiper>
//             </div>
//     );

//     }
// }

// export default Mobile;