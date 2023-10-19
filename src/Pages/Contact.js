import React from "react";

export default function CONTACT() {
  return (
    <div>
      <header>
        <nav className="n1">
          <img className="larva-img1" src={"./images/larva.png"} alt="" />
          <ul className="n1-ul">
            <li><button className="btn">OUR PRODUCTS</button></li>
            <li><button className="btn">SERVICES</button></li>
            <li><button className="btn">CONTACT US</button></li>
            <li><button className="btn">LOGIN</button></li>
          </ul>
        </nav>
      </header>
      <main>

      <div className="contact_div">

        <div className="contact_block_1">
          <img src={"./images/larva.png"} alt="" />
          <div className="address">
            <p>  <h5>Location</h5>Mumbai,Maharashtra opp, Criticare Hospital, Bhandup West, Mumbai-78</p>
            <p>Navsari, Gujarat <br /> Sitaram Nagar, Near.Eroo Chaar Rasta, Navsari, Gujarat</p>
          </div>
        </div>

        <div className="contact_block_2">
          <h2><img src={"./images/email.png"} alt="" className="mail"/>Contact Us</h2>
          <div class="contact_detail">
            <label for="uname"><b>Name</b></label>
            <input type="text" name="uname" required/>
            <label for="psw"><b>Company</b></label>
            <input type="text" name="psw" required/>
            <label for="psw"><b>City</b></label>
            <input type="text" name="psw" required/>
            <label for="psw"><b>Email</b></label>
            <input type="text" name="psw" required/>
            <label for="psw"><b>Phone</b></label>
            <input type="text" name="psw" required/>
            <button type="submit">Submit</button>
          </div>
        </div>

      </div>

      </main>
    </div>
  );
}
