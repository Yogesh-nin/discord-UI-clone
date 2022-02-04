import React from "react";
import friend from "../../images/friends.png";
import OnlineFriend from "./OnlineFriend";

const Navbar_middle = (props) => {
  return (
    <>
      <div className="col g-0" style={{backgroundColor: '#36393f', color:'#8e9297' }}>
        <div className="navbar navbar-expand-lg" style={{borderBottom: '1px solid black'}}>
          <div className="container-fluid">
            <div className="container my-2">
              <div className="row text-white align-items-center">
                <div className="col-auto nav-brand">
                  <img src={friend} /> Friends |
                </div>
                <div className="col-7 ">
                  <div className="row">
                    <div className="navbar-nav mr-auto align-items-center">
                      <div className="col-auto nav-item active">
                        <a className="nav-link  text-white" href="#">
                          Online
                        </a>
                      </div>
                      <div className="col-auto nav-item">
                        <a className="nav-link  text-white" href="#">
                          All
                        </a>
                      </div>
                      <div className="col-auto nav-item">
                        <a className="nav-link  text-white" href="#">
                          Pending
                        </a>
                      </div>
                      <div className="col-auto nav-item">
                        <a className="nav-link  text-white" href="#">
                          Blocked
                        </a>
                      </div>
                      <div className="col-auto nav-item">
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
        </div>
        <OnlineFriend />
      </div>
      
    </>
  );
};

export default Navbar_middle;
