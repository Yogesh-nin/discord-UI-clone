import React from 'react'
import q_mark from '../../../../images/question_mark_icon.png'
const Navbar = () =>{
    return(
        <div>
        <div className="navbar navbar-expand-lg" >
            <div className='container-fluid'>
            <div className="row text-white align-items-center g-0" style={{width: 'inherit'}}>
                <div className="col-auto mx-2 my-1">
                    <div className='mx-3'>
                        <i className="fas fa-hashtag"> &nbsp;</i>
                        <span style={{fontSize: '18px', fontWeight: '600'}}>Javascript</span>
                    </div>    
                </div>

                <div className='col'>
                    <div className='row d-flex justify-content-end'>
                        <div className='col-auto'>
                            <div className='fs-5'>
                                <span className='mx-2'><i class="fas fa-bell"></i></span>
                                <span className='mx-2'><i class="fas fa-thumbtack"></i></span>
                                <span className='mx-2'><i class="fas fa-user-friends"></i></span>
                            </div>
                        </div>

                        <div className='col-auto'>
                            <div class="input-group" style={{backgroundColor: '#292b2f'}}>
                                <input type="text" className="form-control border-0 m-0 text-white" placeholder="Search" style={{backgroundColor: '#292b2f'}}/>
                                <div className="input-group-append d-flex align-items-center mx-2" >
                                    <i class='fas fa-search'></i>
                                </div>
                            </div>
                        </div>
                        <div className='col-auto fs-5'>
                            <span className='mx-2'><i class="fas fa-question-circle"></i></span>
                        </div>
                    </div>
                </div>

                

            </div>
            </div>
        </div>
        </div>
    )
}
export default Navbar;