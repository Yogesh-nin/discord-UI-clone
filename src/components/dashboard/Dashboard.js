import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Sidebox from "./components/Sidebox/Sidebox";
import Navbar_middle from "./components/Friend/FriendNavbar/Navbar_middle";
import OnlineFriend from "./components/Friend/OnlineFriend/OnlineFriend";
import RightBox from "./components/Friend/ActiveFriend/RightBox";
import AddFriend from "./components/Friend/AddFriend/AddFriend";
import "./Dashboard.css";
import All from "./components/Friend/All/All";
import Pending from "./components/Friend/Pending/Pending";
import Blocked from "./components/Friend/Blocked/Blocked";

const Dashboard = (props) => {
  return (
    <div className="container-fluid vh-100 dashboard">
      <div className="row">
        <Sidebar />
        <Sidebox />

        <div
          className="col g-0"
          style={{ backgroundColor: "#36393f", color: "#8e9297" }}
        >
          <Navbar_middle />
          <div className="row middle_row_content  d-flex flex-nowrap g-0 my-auto">
            { props.component === 'Online' && <OnlineFriend /> }
            { props.component === 'AddFriend' && <AddFriend /> }
            { props.component === 'Pending' && <Pending /> }
            { props.component === 'All' && <All /> }
            { props.component === 'Blocked' && <Blocked /> }
            
            <RightBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
