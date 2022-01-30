import React from 'react';
import logo from "../../images/disc_icon.png";
import login_bg from '../../images/login_bg.png'
import qr_code from '../../images/qr_code.png'
const Register = () => {
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
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label for='username' className='form-label'>USERNAME</label>
                            <input type='text' className='form-control' id='username' />
                        </div>
                        <div className="mb-3">
                            <label for="password" className="form-label">PASSWORD</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                                
                    </form>
                    <div className='col-12 d-grid mt-4'>
                        <button className='btn btn-primary'>Continue</button>
                    </div>

                    <div className='mt-1 mb-4'>
                        <a href='' className='text-decoration-none'>Already have an account?</a>
                    </div>
                    
                  </div>
              </div>
          </div>
      </div>
  )
};

export default Register;
