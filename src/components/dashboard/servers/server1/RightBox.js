import React from 'react'
import icon from '../../../../images/disc_icon.png'

const RightBox = () =>{
    return(
        <>
            <div className='col' style={{backgroundColor: '#2f3136', color: '#ffffff'}}>
                <div className='my-4 mx-3'>
                    <h6 style={{fontSize: '15px'}}>ONLINE-3</h6>
                </div>

                <div className='mx-4'>
                    <div className='d-flex'>
                        <div className='rounded-circle d-flex justify-content-center align-items-center' style={{backgroundColor: '#ed4245', height: "50px", width: '50px'}}>
                            <img src={icon} alt="" height='20px' />
                        </div>
                        <div className='flex-grow-1 d-flex align-items-center mx-2'>
                            yogesh
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}

export default RightBox;