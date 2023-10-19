import React from "react";

export default function About() {
  return (
    <div className="login_div">
      <header>
        <nav className="n1">
          <img className="larva-img1" src={"./images/larva.png"} alt="" />
          <ul className="n1-ul">
            <li>
              <button className="btn">OUR PRODUCTS</button>
            </li>
            <li>
              <button className="btn">SERVICES</button>
            </li>
            <li>
              <button className="btn">CONTACT US</button>
            </li>
            <li>
              <button className="btn">LOGIN</button>
            </li>
          </ul>
        </nav>
      </header>

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
