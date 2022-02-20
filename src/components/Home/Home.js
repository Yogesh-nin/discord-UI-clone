import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import first_img from "../../images/invite_only_landing.svg"
import second_img from '../../images/hanging_out_easy_landing.svg'
import third_img from '../../images/fandom_landing.svg'
import fourth_img from '../../images/just_chiling_landing.svg'
import './Home.css'
const Home = () => {
  return(
      <>
      <Header />
      
      <div className="container-fluid">
          <div className="row row-content d-flex align-items-center">
              <div className="col-6 col-md-8">
                  <img src={first_img} alt="first image" width='678px' height='440px' />
              </div>
              <div className="col-6 col-md-3">
                  <h1 className='description_heading'>Create an invite-only place where you belong</h1>
                  <p>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat. </p>
              </div>
          </div>
          <div className="row row-content row-alternate d-flex align-items-center">
              <div className="col-6 col-md-3">
                  <h1 className='description_heading' >Where hanging-out is easy</h1>
                  <p>Grab a seat in a voice channel when you're free. Friends in your servercan see you're around and instantly pop in to talk without having to call.</p>
              </div>
              <div className="col-6 col-md-8">
                  <img src={second_img} alt="Where hanging out is easy image" width='678px' height='440px'/>
              </div>
          </div>

          <div className="row row-content d-flex align-items-center">
              <div className="col-6 col-md-8 ">
                  <img src={third_img} alt="fandom" width='678px' height='440px'/>
              </div>
              <div className="col-6 col-md-3">
                    <h1 className='description_heading'>from few to a fandom</h1>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>   
              </div>
          </div>

          <div className='row row-content row-alternate'>
              <div className="col">
                  <div className='row d-flex justify-content-center'>
                        <div className='col-9'>
                        <h1 className='description_heading'>RELIABLE TECH FOR STAYING CLOSE</h1>
                        <p className='text-center'>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their game gather up and have a drawing session with screen share.</p>
                      </div>

                  </div>

                  <div className='row'>
                      <div className='col-auto'>
                      <img src={fourth_img} alt="Reliable tech " width='1180px' height='716px'/>
                      </div>
                  </div>
              </div>
          </div>

      </div>

      <Footer />
      </>
  )
};

export default Home;
