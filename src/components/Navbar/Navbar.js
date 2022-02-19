import React from "react";
import logo from "../../images/disc_icon.png";
import './Navbar.css'

const Navbar = () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="container my-4 container_content">
          <div className="row d-flex justify-content-between text-white px-4">
            <div className="col-2">
              <a className="navbar-brand text-white" href="/">
                <img
                  className="d-inline-block align-center"
                  src={logo}
                  alt="logo"
                  width="28px"
                  height="20px"
                />
                &nbsp; Discord
              </a>
            </div>
            <div className="col-8">
              <ul className="navbar-nav mr-auto justify-content-center">
                <li className="nav-item active">
                  <a className="nav-link  text-white" href="#">
                    Download
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">
                    Nitro
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">
                    Safety
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Support
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  text-white" href="#">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-2 justify-content-center">
              <a type="button" className="btn btn-light rounded-pill" href='/login'>
                &nbsp; Login &nbsp;
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
