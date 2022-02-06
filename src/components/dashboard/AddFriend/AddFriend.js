import React from 'react';
import add_friend from '../../../images/add_friend_icon.svg'
const AddFriend = () => {
  return(
      <>
          <div className='col-8'>
            <div className='row g-0 flex-nowrap'>
                <div className='col-10 my-3 mx-4'>
                    <h5 className='text-white my-2' style={{fontWeight: '700'}}>Add Friend</h5>
                    <p>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
                </div>    
            </div>
            <div className='row flex-nowrap'>
                <div className='col-11 mx-4'>
                <div class="input-group input-group-lg border border-2 border-dark rounded-3 p-0" style={{backgrounndColor: '#2f3136'}}>
                    <input type="text" className="form-control border-0 m-0 text-white" placeholder="Enter a Username#0000" style={{backgroundColor: '#292b2f'}}/>
                    <div className="input-group-append d-flex align-items-center mx-2">
                        <button className="btn text-white px-4" type="button" style={{fontSize: "14px", backgroundColor: '#404eed', fontWeight: '600'}}>Send Friend Request</button>
                    </div>
                </div>
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-auto mx-auto'>
                    <div className= 'd-flex justify-content-center'>
                        <img className='my-4' src={add_friend} alt="" width='350px' />
                    </div>
                    <p className='my-4' style={{fontSize: '17px'}}>Wumpus is waiting on friends. You don't have to though! </p>

                </div>
            </div>
            
            
          </div>
      </>
  )
};

export default AddFriend;
