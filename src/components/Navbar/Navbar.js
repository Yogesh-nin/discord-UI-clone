import React from "react";
import logo from "../../images/disc_icon.png";
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () =>{
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="container my-4 container-content">
          <div className="row d-flex justify-content-between text-white px-4">
            <div className="col-2">
              <a className="navbar-brand text-white" href="/">
                <img
                  className="d-inline-block align-center"
                  src={logo}
                  alt="logo"
                  width="35px"
                  height="25px"
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
                  <a className="nav-link text-white" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link  text-white" to="/login">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2 justify-content-center">
              <Link type="button" className="btn btn-light rounded-pill" to='/login'>
                &nbsp; Login &nbsp;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
