import React from 'react'
import Navbar from './server1/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Sidebox from './server1/Sidebox'
import MessageBox from './server1/MessageBox'
import RightBox from './server1/RightBox'
const server = () => {
  return (
    <div className="container-fluid vh-100 dashboard">
      <div className="row">
        <Sidebar />
        <Sidebox />

        <div
          className="col g-0"
          style={{ backgroundColor: "#36393f", color: "#8e9297" }}
        >
          <Navbar />
          <div className="row d-flex flex-nowrap g-0">
            <MessageBox />
            <RightBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default server