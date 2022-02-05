import React from 'react';

const AddFriend = () => {
  return(
      <>
          <div className='col-8'>
            <div className='row flex-nowrap'>
                <div className='col'>
                    <h5>Add Friend</h5>
                    <p>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</p>
                </div>    
            </div>
            <div className='row flex-nowrap'>
                <div className='col'>
                    <form className='my-2'>
                        <input type="text" placeholder='Enter a Username#0000' className='form-control' id='addFriend' />

                    </form>
                </div>
            </div>
            
          </div>
      </>
  )
};

export default AddFriend;
