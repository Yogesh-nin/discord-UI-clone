import React from 'react';
import friend from '../../images/friends.png'

const Navbar_middle = (props) => {
  return(
      <div className='col g-0'>
          <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                <div className="container my-2">
                    <div className="row text-white align-items-center">
                        <div className='col-auto nav-brand'>
                            <img src={friend} /> Friends |
                        </div>
                        <div className='col-7 '>
                            <div className='row'>
                                <div className="navbar-nav mr-auto align-items-center">
                                    <div className='col-auto nav-item active'>
                                        <a className="nav-link  text-white" href="#">Online</a>
                                    </div>
                                    <div className='col-auto nav-item'>
                                        <a className="nav-link  text-white" href="#">All</a>
                                    </div>
                                    <div className='col-auto nav-item'>
                                        <a className="nav-link  text-white" href="#">Pending</a>
                                    </div>
                                    <div className='col-auto nav-item'>
                                        <a className="nav-link  text-white" href="#">Blocked</a>
                                    </div>
                                    <div className='col-auto nav-item'>
                                        <a className="text-white btn btn-success btn-sm" href="#">Add friend</a>
                                    </div>
                                </div>
                            </div>
                            {/* <ul className="navbar-nav mr-auto justify-content-center">
                                <li className="nav-item active">
                                    <a className="nav-link  text-white" href="#">Online</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-white" href="#">All</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-white" href="#">Pending</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link  text-white" href="#">Blocked</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white btn btn-success btn-sm" href="#">Add friend</a>
                                </li>
                            </ul> */}
                        </div>

                    </div>
                </div>
            </div>
          </div>
      </div>
  )
};

export default Navbar_middle;
