import React from 'react';
import AddFriend from './AddFriend/AddFriend';
import Navbar_middle from './Navbar_middle';
import OnlineFriend from './OnlineFriend';
// import RightBox from './RightBox';
import RightBox from './servers/server1/RightBox'
import Sidebar from './Sidebar';
import Sidebox from './servers/server1/Sidebox';
import Navbar from './servers/server1/Navbar'
import MessageBox from './servers/server1/MessageBox';

const Dashboard = () => {
  return(
      <div className='container-fluid'>
          <div className='row'>
              <Sidebar />
              <Sidebox />
              <div className="col vh-100 g-0" style={{backgroundColor: '#36393f', color:'#8e9297' }}>
                {/* <Navbar_middle /> */}
                <Navbar />
                <div className='row flex-nowrap g-0'>
                  {/* <OnlineFriend />
                  <AddFriend /> */}
                  
                  <MessageBox />
                  <RightBox />
                </div>
               
                
              </div>
              
          </div>
      </div>
  )
};

export default Dashboard;
