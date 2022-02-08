import React from 'react'

const Navbar = () =>{
    return(
        <div className="navbar navbar-expand-lg">
            <div className="row text-white align-items-center">
                <div className="col-auto nav-brand mx-2 my-1">
                    <div className='mx-3'>
                        <i className="fas fa-hashtag"> &nbsp;</i>
                        <span style={{fontSize: '18px', fontWeight: '600'}}>Javascript</span> 
                    </div>
                
                </div>
            </div>
        </div>
    )
}
export default Navbar;