import React from "react";
import friend from "../../../../images/friends.png";
import stage_discovery from "../../../../images/stage_discovery.png";
import nitro from "../../../../images/nitro_icon.png";
import plus_icon from "../../../../images/plus_icon.png";
import Profile from "../ProfileTab/Profile";
import { Link } from "react-router-dom";
import "./Sidebox.css";

const Sidebox = () => {
    return (
        <div className="col-2 sidebox">
            <form className="my-3">
                <input
                    type="text"
                    placeholder="Find or start a conversation"
                    className="form-control border-0 text-white"
                    id="searchBox"
                />
            </form>
            <div className="my-1 navs active">
                <Link to="" className="sidebox_link">
                    <img src={friend} /> Friends
                </Link>
            </div>
            <div className="my-1 navs">
                <Link className="sidebox_link" to="">
                    <img src={stage_discovery} /> Stage Discovery
                </Link>
            </div>
            <div className="my-1 navs">
                <Link to="" className="sidebox_link">
                    <img src={nitro} /> Nitro
                </Link>
            </div>

            <div className="my-4">
                <div>
                    DIRECT MESSAGES
                    <img src={plus_icon} alt="" style={{ float: "right" }} />
                </div>
            </div>

            <Profile />
        </div>
    );
};

export default Sidebox;
