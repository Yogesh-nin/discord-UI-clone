import React, { useState } from 'react';
import logo from "../../../images/disc_icon.png";
import login_bg from '../../../images/login_bg.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
    //handling registring form
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleChange = (e) =>{

        const {name, value} = e.target
        setUser({
            ...user, [name]: value
        })
    }

    const register = (e) =>{
        e.preventDefault();
        const {username,email,password} = user
        if(username && email && password){
            axios.post("http://localhost:6969/Register",user )
            .then(res=>console.log(res))
        }
        else{
            alert("invalid input")
        }
    }



    const style_bg = {
        backgroundImage: `url(${login_bg})`,
        backgroundRepeat: 'no-repeat',
        height: "100%",
        position: "absolute",
        left: 0,
        width: "100%",
        overflow: "hidden",
        backgroundSize: "cover"
    }
  return(
      <div className="img-fluid" style={style_bg}>
          <div className='container '>
              <div className="row">
                  <div className='col-12 my-4'>
                    <a className="text-white text-decoration-none" href="/"><img className="d-inline-block align-center" src={logo} alt="logo" width="28px" height="20px" /> Discord</a>
                  </div>
              </div>
              <div className='row my-5 justify-content-center'>
                  <div className='col-4 my-4 bg-dark text-white'>
                      <div className='my-4 text-center'>
                        <h5>Create an account</h5>
                      </div>
                      
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label">EMAIL</label>
                            <input type="email" className="form-control" id="email" name='email' value={user.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for='username' className='form-label'>USERNAME</label>
                            <input type='text' className='form-control' id='username' name='username' value={user.username} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control" id="password" name='passsword' value={user.password} onChange={handleChange} />
                        </div>
                                
                    </form>
                    <div className='col-12 d-grid mt-4'>
                        <button className='btn btn-primary' onClick={register} >Continue</button>
                    </div>

                    <div className='mt-1 mb-4'>
                        <Link to='/login' className='text-decoration-none'>Already have an account?</Link>
                    </div>
                    
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Register;
