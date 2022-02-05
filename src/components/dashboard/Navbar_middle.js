import React from "react";
import friend from "../../images/friends.png";


const Navbar_middle = (props) => {
  return (
    <>
      <div>
        <div className="navbar navbar-expand-lg" style={{borderBottom: '1px solid black'}}>
              <div className="row text-white align-items-center">
                <div className="col-auto nav-brand mx-1">
                  <img src={friend} /> Friends |
                </div>
                <div className="col-7 ">
                  <div className="row">
                    <div className="navbar-nav mr-auto align-items-center">
                      <div className="col-auto mx-1 nav-item active">
                        <a className="nav-link  text-white" href="#">
                          Online 
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a className="nav-link  text-white" href="#">
                          All
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a className="nav-link  text-white" href="#">
                          Pending
                        </a>
                      </div>
                      <div className="col-auto nav-item mx-1">
                        <a className="nav-link  text-white" href="#">
                          Blocked
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
