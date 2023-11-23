import React from "react";
import Navbar from "../component/Navbar";


export default function About() {
  function retail(params) {}
  function distribut(params) {}
  return (
    <>
    <Navbar/>
    <div className="login_div">
   
      <main className="log_r_div">
        <div className="r_div_img">
          <img src={"./images/design.jpg"} alt="" />
        </div>
        <div>
          <h2>Welcome Back</h2>
          <span className="body">
            <input type="checkbox" id="toggle" className="toggleCheckbox" />
            <label htmlFor="toggle" className="toggleContainer">
              <div onClick={retail()}>Retailer</div>
              <div onClick={distribut()}>Distributor</div>
            </label>
          </span>
          <div className="login_detail">

            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" name="uname" required/>

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" name="psw" required/>

            <button type="submit" >Login</button>

            <a href="/"><img src={"./images/google.png"} className="google" alt="" /> Log in with Google</a>

            <a href="/" >Don't have an account? <b>SignUp</b></a>

          </div>
        </div>
      </main>
    </div>
    </>
  );
}
