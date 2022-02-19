import React from 'react';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import first_img from "../../images/invite_only_landing.svg"
import second_img from '../../images/hanging_out_easy_landing.svg'
import third_img from '../../images/fandom_landing.svg'
import fourth_img from '../../images/just_chiling_landing.svg'

const Home = () => {
  return(
      <>
      <Header />
      
      <div className="container">
          <div className="row d-flex align-items-center">
              <div className="col-6 col-md-8">
                  <img src={first_img} alt="image"/>
              </div>
              <div className="col-6 col-md-3">
                  <h1>Create an invite-only place where you belong</h1>
                  <p>iscord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat. </p>
              </div>
          </div>
          <div className="row d-flex align-items-center">
              <div className="col-6 col-md-3">
                  <h1>Where hanging-out is easy</h1>
                  <p>Grab a seat in a voice channel when you're free. Friends in your servercan see you're around and instantly pop in to talk without having to call.</p>
              </div>
              <div className="col-6 col-md-8">
                  <img src={second_img} alt="image"/>
              </div>
          </div>

          <div className="row d-flex align-items-center">
              <div className="col-6 col-md-8 ">
                  <img src={third_img} alt="image" />
              </div>
              <div className="col-6 col-md-3">
                    <h1>from few to a fandom</h1>
                    <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>   
              </div>
          </div>

          <div className='row'>
              <div className="col">
                <h1 className='text-center'>RELIABLE TECH FOR STAYING CLOSE</h1>
                <p>Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their game gather up and have a drawing session with screen share.</p>
                <img src={fourth_img} alt="image"/>

              </div>
          </div>

      </div>

      <Footer />
      </>
  )
};

export default Home;
