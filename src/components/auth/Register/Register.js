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
            axios.post("http://localhost:5000/user/register",user )
            .then(res=>console.log(res))
        }
        else{
            alert("invalid input")
        }
    }


  return(
      <div className="img-fluid login_background" style={{backgroundImage: `url(${login_bg})`}}>
          <div className='container '>
              <div className="row">
                  <div className='col-12 my-4'>
                    <a className="text-white text-decoration-none" href="/"><img className="d-inline-block align-center" src={logo} alt="logo" width="28px" height="20px" /> Discord</a>
                  </div>
              </div>
              <div className='row my-5 justify-content-center'>
                  <div className='col-4 my-4 login_box text-white'>
                      <div className='my-4 text-center '>
                        <h5 className='login_heading'>Create an account</h5>
                      </div>
                      
                    <form>
                        <div className="mb-3">
                            <label for="email" className="form-label labels">EMAIL</label>
                            <input type="email" className="form-control form_input" id="email" name='email' value={user.email} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for='username' className='form-label labels'>USERNAME</label>
                            <input type='text' className='form-control form_input' id='username' name='username' value={user.username} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label labels">PASSWORD</label>
                            <input type="text" className="form-control form_input" id="password" name='password' value={user.password} onChange={handleChange} />
                        </div>
                                
                    </form>
                    <div className='col-12 d-grid mt-4'>
                        <button className='btn btn-lg submit_button' onClick={register} >Continue</button>
                    </div>

                    <div className='mt-1 mb-4'>
                        <Link to='/login' className='link'>Already have an account?</Link>
                    </div>
                    
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Register;
