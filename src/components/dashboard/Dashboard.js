import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import Sidebox from './Sidebox'
import Navbar_middle from './Navbar_middle'
import OnlineFriend from './OnlineFriend'
import RightBox from './RightBox';
const Dashboard = () => {
  return(
      <div className='container-fluid vh-100'>
          <div className='row'>
              <Sidebar />
              <Sidebox />
              <div className="col g-0" style={{backgroundColor: '#36393f', color:'#8e9297' }}>
                <Navbar_middle />
                <div className='row d-flex flex-nowrap g-0'>
                  <OnlineFriend />
                  <RightBox />
                </div>
               
                
              </div>
              
          </div>
      </div>
  )
};

export default Dashboard;
