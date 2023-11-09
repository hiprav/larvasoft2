import React from "react";
import Navbar from "../component/Navbar";


export default function About() {
  return (
    <div className="login_div">
      <Navbar/>
      <main className="log_r_div">
        <div className="r_div_img">
          <img src={"./images/design.jpg"} alt="" />
        </div>
        <div>
          <h2>Welcome Back</h2>
          <span class="body">
            <input type="checkbox" id="toggle" class="toggleCheckbox" />
            <label for="toggle" class="toggleContainer">
              <div onclick="">Retailer</div>
              <div onclick="">Distributor</div>
            </label>
          </span>
          <div class="login_detail">

            <label for="uname"><b>Username</b></label>
            <input type="text" name="uname" required/>

            <label for="psw"><b>Password</b></label>
            <input type="password" name="psw" required/>

            <button type="submit" >Login</button>

            <a href="/"><img src={"./images/google.png"} className="google" alt="" /> Log in with Google</a>

            <a href="/" >Don't have an account? <b>SignUp</b></a>

          </div>
        </div>
      </main>
    </div>
  );
}
