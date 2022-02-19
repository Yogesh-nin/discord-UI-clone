import React from "react";
import flag from "../../images/usa_flag.png";
import facebook from "../../images/fb_icon.png";
import instagram from "../../images/ig_icon.png";
import twitter from "../../images/tt_icon.png";
import youtube from "../../images/youTube_icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <div className="container container_content">
        <div className="row">
          <div className="col-2 mx-2">
            <h4 className="heading">IMAGINE A PLACE </h4>
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
                    <li>Download</li>
                  </a>
                  <a>
                    <li>Nitro</li>
                  </a>
                  <a>
                    <li>Status</li>
                  </a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Compnay</li>
                  </a>
                  <a>
                    <li>About</li>
                  </a>
                  <a>
                    <li>Jobs</li>
                  </a>
                  <a>
                    <li>Branding</li>
                  </a>
                  <a>
                    <li>Newsroom</li>
                  </a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Resource</li>
                  </a>
                  <a>
                    <li>Collage</li>
                  </a>
                  <a>
                    <li>Support</li>
                  </a>
                  <a>
                    <li>Safety</li>
                  </a>
                  <a>
                    <li>Blog</li>
                  </a>
                  <a>
                    <li>Feedbacks</li>
                  </a>
                  <a>
                    <li>Developers</li>
                  </a>
                  <a>
                    <li>StreamKit</li>
                  </a>
                </ul>
              </div>
              <div className="col-2">
                <ul className="list-unstyled">
                  <a>
                    <li className="list_title">Policies</li>
                  </a>
                  <a>
                    <li>Terms</li>
                  </a>
                  <a>
                    <li>Privacy</li>
                  </a>
                  <a>
                    <li>Guidelines</li>
                  </a>
                  <a>
                    <li>Acknowledgements</li>
                  </a>
                  <a>
                    <li>Licenses</li>
                  </a>
                  <a>
                    <li>Moderation</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
