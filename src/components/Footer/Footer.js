import React from "react";
import flag from "../../images/usa_flag.png";
import facebook from "../../images/fb_icon.png";
import instagram from "../../images/ig_icon.png";
import twitter from "../../images/tt_icon.png";
import logo from "../../images/disc_icon.png";

import youtube from "../../images/youTube_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container container_content">
        <div className="row my-2">
          <div className="col-3 mx-2">
            <h4 className="heading_footer">IMAGINE A PLACE </h4>
            <img src={flag} alt="flag" height="16px" /> English, USA
            <div className="social_logos">
              <img className="mx-2" src={twitter} alt="twitter" height="18px" />
              <img
                className="mx-2"
                src={instagram}
                alt="instagram"
                height="18px"
              />
              <img
                className="mx-2"
                src={facebook}
                alt="facebook"
                height="23px"
              />
              <img className="mx-2" src={youtube} alt="youtube" height="18px" />
            </div>
          </div>

          <div className="col">
            <div className="row d-flex justify-content-between mx-4">
              <div className="col-2 mx-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Product</li>
                  </a>
                  <a>
                    <li className="list-item">Download</li>
                  </a>
                  <a>
                    <li className="list-item">Nitro</li>
                  </a>
                  <a>
                    <li className="list-item">Status</li>
                  </a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Company</li>
                  </a>
                  <a>
                    <li className="list-item">About</li>
                  </a>
                  <a>
                    <li className="list-item">Jobs</li>
                  </a>
                  <a>
                    <li className="list-item">Branding</li>
                  </a>
                  <a>
                    <li className="list-item">Newsroom</li>
                  </a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Resource</li>
                  </a>
                  <a>
                    <li className="list-item">Collage</li>
                  </a>
                  <a>
                    <li className="list-item">Support</li>
                  </a>
                  <a>
                    <li className="list-item">Safety</li>
                  </a>
                  <a>
                    <li className="list-item">Blog</li>
                  </a>
                  <a>
                    <li className="list-item">Feedbacks</li>
                  </a>
                  <a>
                    <li className="list-item">Developers</li>
                  </a>
                  <a>
                    <li className="list-item">StreamKit</li>
                  </a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Policies</li>
                  </a>
                  <a>
                    <li className="list-item">Terms</li>
                  </a>
                  <a>
                    <li className="list-item">Privacy</li>
                  </a>
                  <a>
                    <li className="list-item">Guidelines</li>
                  </a>
                  <a>
                    <li className="list-item">Acknowledgements</li>
                  </a>
                  <a>
                    <li className="list-item">Licenses</li>
                  </a>
                  <a>
                    <li className="list-item">Moderation</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <hr style={{color: "#5865f2"}} />

          <div className="row my-4 d-flex justify-content-between">
            <div className="col-auto my-3">
              <img src={logo} alt="discord logo" width="35px" height="25px" /> <span className='discord_logo'> &nbsp; Discord &nbsp;</span>
            </div>

            <div className="col-auto my-3 justify-content-center">
              <a className="btn rounded-pill discord_button" href='/login'>
                &nbsp; Login &nbsp;
              </a>
            </div>
          </div>

      </div>
    </div>
  );
};

export default Footer;
