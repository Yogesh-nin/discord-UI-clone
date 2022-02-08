import React from 'react'
import icon from '../../../../images/disc_icon.png'
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

            <div className='row profile' style={{backgroundColor: '#23272a', position: 'fixed', bottom: 0, width: 'inherit'}}>
                <div className='col-auto g-0 mx-1 my-2'>
                    <div className='rounded-circle d-flex justify-content-center align-items-center' style={{backgroundColor: '#ed4245', height: "50px", width: '50px'}}>
                        <img src={icon} alt="" height='20px' />
                    </div>
                </div>

                <div className='col-auto d-flex align-items-center' style={{fontSize: '13px', fontWeight: '600'}}>
                    yogesh <br />
                    #8454
                </div>

                <div className='col d-flex align-items-center justify-content-around'>
                    <i className="fas fa-microphone"> </i>
                    <i className="fas fa-headphones"> </i>
                    <i className="fas fa-cog"> </i>
                </div>
                
            </div>

        </div>
    )
}

export default Sidebox;