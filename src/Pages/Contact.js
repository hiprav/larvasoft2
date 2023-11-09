import React from 'react'
import Navbar from '../component/Navbar'

export default function Contact() {
  return (
    <div>
      <div>
      <Navbar/>
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
    </div>
  )
}
