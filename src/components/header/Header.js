import React from 'react';
import left_bg from '../../images/left_bg_landing_header.svg'
import center_bg from '../../images/center_bg_landing_header.svg'
import right_bg from '../../images/right_bg_landing_header.svg'
import Navbar from '../Navbar/Navbar';
import './Header.css'
function Header(){

    
    return (
            <div className='header_container'>
                <Navbar />

                <div className='row d-flex justify-content-center'>
                    <div className='col-6 middlePart text-center'>
                        <h1 className='heading'>IMAGINE A PLACE...</h1>
                        <div className="my-4">
                            <p className='text-center'>...where you can belong to a school club, a gaming group and a worldwide art community.Where just you and handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often</p>
                        </div>
                    </div>
                </div>
                
                <div className='back_foregroundImages'>
                    <img className='center_background_image' src={center_bg} alt="backgroundImage" />
                    <img className='left_foreground' src={left_bg} alt='left foreground' width='689px' height='352px' />
                </div>
            </div>




        // <div style={{ backgroundColor: "#404eed", backgroundImage: `url(${center_bg})`, minHeight: "650px", color: "#ffffff"}}>
        //     <Navbar />
        //     <header>
        //         <div className="container-fluid my-4">
        //             <div className="row">
        //                 {/* <div className="col-2 left_bg" style={{background: `url(${left_bg}) no-repeat bottom left`, height: "300px", width: "300px"}}>
        //                     <h1>Left div</h1>
        //                 </div> */}
        //                 <img className='left_bg' src={left_bg} alt="" />
        //                 <div className="col-6 my-4">
        //                     <h1 className='text-center my-4' style={{fontWeight: "800", fontSize: "56px", lineHeight: "95%", fontFamily: 'Ginto, "Helvetica Neue", Helvetica, Arial, sans-serif' }} >IMAGINE A PLACE...</h1>
        //                     <div className="my-4" style={{fontSize: "18px"}}>
        //                         <p className='text-center'>...where you can belong to a school club, a gaming group and a worldwide art community.Where just you and handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often</p>
        //                     </div>
        //                     <div className="row my-4">
        //                         <div className="col-5 offset-1 d-grid">
        //                             <a href='#' className="btn btn-light rounded-pill btn-block btn-lg"> Download for mac </a>
        //                         </div>
        //                         <div className="col-5 d-grid">
        //                             <a href='#' className="btn btn-dark rounded-pill btn-lg"> open discord in browser </a>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className='col-2' style={{backgroundImage: `url(${right_bg})`}}>
        //                     <h1>Right div</h1>
        //                 </div>
        //             </div>
        //         </div>
                
        //     </header>
        // </div>
    )
} 
export default Header;
