import React from "react";
import logo from "../../images/disc_icon.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
          <div className="container my-2">
        <div className="row d-flex justify-content-between text-white">
          <div className="col-2">
            <a className="navbar-brand text-white" href="/"><img className="d-inline-block align-center" src={logo} alt="logo" width="28px" height="20px" /> Discord</a>
          </div>
          <div className="col-8">
                <ul class="navbar-nav mr-auto justify-content-center">
                    <li class="nav-item active">
                        <a class="nav-link  text-white" href="#">Download</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#">Nitro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#">Safety</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Support</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link  text-white" href="#">Careers</a>
                    </li>
                
                
                </ul>
          </div>
          <div className="col-2 justify-content-center">
            <button type="button" className="btn btn-light rounded-pill"> Login </button>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
