import React from 'react';
import bg_image from '../../images/login_bg.png'
import Navbar from '../Navbar/Navbar';

function Header(){

    
    return (
        <div style={{ backgroundImage: `url(${bg_image})`, minHeight: '750px', color: "#ffffff"}}>
            <Navbar />
            <header>
                <div className="container my-4">
                    <h1 className='text-center my-4' style={{fontWeight: "800", fontSize: "56px", lineHeight: "95%" }} >IMAGINE A PLACE...</h1>
                    <div className="row">
                        <div className="col-6 offset-3 d-flex justify-content-cente my-3" style={{fontSize: "16px"}}>
                            
                            <p>...where you can belong to a school club, a gaming group and a worldwide art community.Where just you and handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often</p>
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 offset-1 d-grid">
                            <a className="btn btn-light rounded-pill btn-block btn-lg"> Download for mac </a>
                        </div>
                        <div className="col-5 d-grid">
                            <a className="btn btn-dark rounded-pill btn-lg"> open discord in browser </a>
                        </div>
                    </div>
                    
                </div>
                
            </header>
        </div>
    )
} 
export default Header;
