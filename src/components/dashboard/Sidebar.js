import React from 'react';
import favicon from '../../images/favicon.ico'
import new_line from '../../images/new_line.png'
import plus_icon from '../../images/plus.png'

const Sidebar = () => {
  return(

        <div className="col-auto" style={{backgroundColor: '#202225'}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start pt-2 min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mt-4">
                    <img className='rounded-4' src={favicon} alt="" height='50px'/>
                </a>
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto">
                    <img className='rounded-4' src={new_line} alt="" height='50px' />
                </a>
                    <a href="/" className="d-flex align-items-center">
                        <div className='rounded-circle d-flex justify-content-center align-items-center' style={{ backgroundColor: '#36393f' , height: "50px", width: '50px'}}>
                            <img className='' src={plus_icon} alt="" height='18px'/>
                        </div>
                    </a>    
                
            </div>
          
        </div>
 
  
  )
};

export default Sidebar;
