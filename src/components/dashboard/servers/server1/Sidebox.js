import React from 'react'
import icon from '../../../../images/disc_icon.png'
import Profile from '../../components/ProfileTab/Profile';
const Sidebox = () =>{
    return(
        <div className='col-2' style={{backgroundColor: '#2f3136', color: '#ffffff'}}>
            <div className='row my-3'>
                <h6 style={{fontSize: '18px', fontWeight: '600'}}>newLine</h6>
            </div>
            
            <div className='mb-4'>
                {/* <span style={{fontSize: '25'}}># </span> */}
                <i className="fas fa-hashtag"></i>
                rules
            </div>

            <div className='my-2'>
                <i className="fas fa-angle-down"> </i> <span>TEXT-CHANNELS</span> 

                <div className='px-2'>

                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> algorithm
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> announcements
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> blogging
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> collaborators
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> course-ideas
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> machine-learning
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> machine-learning
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> machine-learning
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> machine-learning
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> machine-learning
                    </div>
                    <div className='my-3'>
                        <i className="fas fa-hashtag"></i> machine-learning
                    </div>
                </div>
            </div>

            <Profile />

        </div>
    )
}

export default Sidebox;