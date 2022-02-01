import React from 'react';
import friend from '../../images/friends.png'

const Navbar_middle = (props) => {
  return(
      <div className='col-8'>
          <div className='navbar navbar-expand-lg navbar-dark bg-dark'>
            <div className="container-fluid">
                {/* <div className="container my-2"> */}
                    <div className="row text-white">
                        <div className='col-2 nav-brand'>
                            <img src={friend} /> Friends |
                        </div>

                    </div>
                {/* </div> */}
            </div>
          </div>
      </div>
  )
};

export default Navbar_middle;
