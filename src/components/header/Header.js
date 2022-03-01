import React from 'react';
import left_bg from '../../images/left_bg_landing_header.svg'
import center_bg from '../../images/center_bg_landing_header.svg'
import right_bg from '../../images/right_bg_landing_header.svg'
import Navbar from '../Navbar/Navbar';
import './Header.css'

const  Header = () => {

    
    return (
            <div className='header_container'>
                <Navbar />
                <div className='row d-flex justify-content-center middlePart '>
                    <div className='col-6 text-center'>
                        <h1 className='heading'>IMAGINE A PLACE...</h1>
                        <div className="my-4 px-3 middle_para">
                            <p className='text-center'>...where you can belong to a school club, a gaming group and a worldwide art community.Where just you and handful of friends can spend time together. A place that makes it easy to talk everyday and hang out more often</p>
                        </div>

                        <div className="row buttons_row">
                          <div className="col-5 offset-1 d-grid">
                              <a href='#' className="btn btn-light rounded-pill btn-block btn-lg"> <i class="fas fa-arrow-to-bottom"></i> Download for mac </a>
                          </div>
                          <div className="col-5 d-grid">
                              <a href='#' className="btn btn-dark rounded-pill btn-lg"> open discord in browser </a>
                          </div>
                      </div>
                    </div>
                </div>
                
                <div className='back_foregroundImages'>
                    <img className='center_background_image' src={center_bg} alt="backgroundImage" />
                    <img className='left_foreground' src={left_bg} alt='left foreground' width='689px' height='352px' />
                    <img className='right_foreground' src={right_bg} alt='right foreground' width='615px' height='360px' />
                </div>
            </div>
    )
} 
export default Header;
