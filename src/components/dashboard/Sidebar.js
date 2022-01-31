import React from 'react';
import favicon from '../../images/favicon.ico'
import new_line from '../../images/new_line.png'
import plus_icon from '../../images/plus.png'
import Sidebox from './Sidebox'

const Sidebar = () => {
  return(

    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto px-sm-2 px-0" style={{backgroundColor: '#202225'}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100 my-3">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto">
                    <img className='rounded-4' src={favicon} alt="" height='50px'/>
                </a>
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto">
                    <img className='rounded-4' src={new_line} alt="" height='50px' />
                </a>
                    <a href="/" className="d-flex align-items-center">
                        <div className='rounded-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#4f545c' , height: "50px", width: '50px'}}>
                            <img className='' src={plus_icon} alt="" height='20px'/>
                        </div>
                    </a>    
                
            </div>
          
        </div>
        <Sidebox />
    </div>
</div>
 
  
  )
};

export default Sidebar;
