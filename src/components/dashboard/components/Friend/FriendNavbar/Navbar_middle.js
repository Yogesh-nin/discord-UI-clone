import React, { useState, useEffect } from "react";
import friend from "../../../../../images/friends.png";
import './Navbar_middle.css'
import { Link, useLocation } from 'react-router-dom'

const Navbar_middle = (props) => {

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

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
                        <Link className="nav-link nav_middle_link text-white" to="/dashboard">
                          <span className={`navs ${url === '/dashboard' ? 'active' : ''} `}> Online</span>   
                        </Link >
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <Link className="nav-link nav_middle_link text-white" to="/dashboard/all">
                          <span className={`navs ${url === '/dashboard/all' ? 'active' : ''} `}> All</span>
                        </Link >
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <Link className="nav-link nav_middle_link text-white" to="/dashboard/pending">
                        <span className={`navs ${url === '/dashboard/pending' ? 'active' : ''} `}>Pending</span>
                        </Link >
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <Link className="nav-link nav_middle_link text-white" to="/dashboard/blocked">
                          <span className={`navs ${url === '/dashboard/blocked' ? 'active' : ''} `}>Blocked</span>
                        </Link >
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <Link
                          className="text-white btn btn-success btn-sm"
                          to="/dashboard/addfriend"
                        >
                          Add friend
                        </Link>
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
