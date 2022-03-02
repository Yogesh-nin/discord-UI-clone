import React, { useState } from "react";
import icon from '../../../../images/disc_icon.png'

const Profile = () => {

    const [audio, setAudio] = useState('OFF')

    const changeAudioState = () =>{
        setAudio(
            audio === 'ON' ? 'OFF' : 'ON'
        )
    }
    return (
        <div
        className="row profile"
        style={{
            backgroundColor: "#23272a",
            position: "fixed",
            bottom: 0,
            width: "inherit",
        }}
        >
        <div className="col-auto g-0 mx-1 my-2">
            <div
            className="rounded-circle d-flex justify-content-center align-items-center"
            style={{
                backgroundColor: "#ed4245",
                height: "50px",
                width: "50px",
            }}
            >
            <img src={icon} alt="" height="20px" />
            </div>
        </div>

        <div
            className="col-auto d-flex align-items-center"
            style={{ fontSize: "13px", fontWeight: "600" }}
        >
            yogesh <br />
            #8454
        </div>

        <div className="col d-flex align-items-center justify-content-around">

            {(audio == 'ON') ? <i class="fas fa-microphone" onClick={changeAudioState}></i> : <i class="fas fa-microphone-slash" onClick={changeAudioState}></i>}
                
            <i className="fas fa-headphones"> </i>
            <i className="fas fa-cog"> </i>
        </div>
        </div>
    );
};

export default Profile;
