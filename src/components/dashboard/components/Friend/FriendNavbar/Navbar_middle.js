import React from "react";
import friend from "../../../../../images/friends.png";
import './Navbar_middle.css'

const Navbar_middle = (props) => {
  return (
    <>
      <div>
        <div className="navbar navbar-expand-lg navbar_middle" style={{borderBottom: '1px solid black'}}>
              <div className="row text-white align-items-center">
                <div className="col-auto nav-brand mx-1">
                  <img src={friend} /> Friends |
                </div>
                <div className="col-7 p-1">
                  <div className="row">
                    <div className="navbar-nav mr-auto align-items-center">
                      <div className="col-auto mx-1 nav-item">
                        <a className="nav-link nav_middle_link text-white" href="#">
                          <span className="navs active"> Online</span>   
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a className="nav-link nav_middle_link text-white" href="#">
                          <span className="navs"> All</span>
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a className="nav-link nav_middle_link text-white" href="#">
                        <span className="navs">Pending</span>
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a className="nav-link nav_middle_link text-white" href="#">
                          <span className="navs">Blocked</span>
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a
                          className="text-white btn btn-success btn-sm"
                          href="#"
                        >
                          Add friend
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar_middle;
