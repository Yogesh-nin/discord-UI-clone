import React from 'react';
import flag from '../../images/usa_flag.png'
import facebook from '../../images/fb_icon.png'
import instagram from '../../images/ig_icon.png'
import twitter from '../../images/tt_icon.png'
import youtube from '../../images/youTube_icon.png'
const Footer = () => {
  return(
      <div className="bg-dark text-white">
          <div className='container'>
              <div className="row">
                  <div className='col-2'>

                      <h2 className='text-primary'>IMAGINE A PLACE </h2>
                      <img src={flag} alt="flag" height="16px" /> English, USA
                      <div>
                        <img className="mx-1" src={twitter} alt="twitter" height="16px"/>
                        <img className="mx-1" src={instagram} alt="instagram" height="16px"/>
                        <img className="mx-1" src={facebook} alt="facebook" height="21px"/>
                        <img className="mx-1" src={youtube} alt="youtube" height="16px"/> 
                      </div>
                  </div>

                  <div className="col-2">
                      <ul className="list-unstyled">
                          <li>Product</li>
                          <li>Download</li>
                          <li>Nitro</li>
                          <li>Status</li>
                      </ul>
                  </div>
                  <div className="col-2">
                      <ul className="list-unstyled">
                          <li>Compnay</li>
                          <li>About</li>
                          <li>Jobs</li>
                          <li>Branding</li>
                          <li>Newsroom</li>
                      </ul>
                  </div>
                  <div className="col-2">
                      <ul className="list-unstyled">
                          <li>Resource</li>
                          <li>Collage</li>
                          <li>Support</li>
                          <li>Safety</li>
                          <li>Blog</li>
                          <li>Feedbacks</li>
                          <li>Developers</li>
                          <li>StreamKit</li>
                      </ul>
                  </div>
                  <div className="col-2">
                      <ul className="list-unstyled">
                          <li>Policies</li>
                          <li>Terms</li>
                          <li>Privacy</li>
                          <li>Guidelines</li>
                          <li>Acknowledgements</li>
                          <li>Licenses</li>
                          <li>Moderation</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Footer;
