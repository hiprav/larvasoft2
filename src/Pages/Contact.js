import React from 'react'
import Navbar from '../component/Navbar'
import "../Css/Contact.css";

export default function Contact() {
  return (
    <div>
       <Navbar/>
      <div>
     
      <main>
      <div className="contact_div">
    
        <div className="contact_block_1">
          <img src={"./images/larva.png"} alt="" className='larva_img'/>
          <div className="address">
            <p>Mumbai,Maharashtra opp, Criticare Hospital, Bhandup West, Mumbai-78</p>
            <p>Navsari, Gujarat <br /> Sitaram Nagar, Near.Eroo Chaar Rasta, Navsari, Gujarat</p>
          </div>
        </div>

        <div className="contact_block_2">
          <h2><img src={"./images/email.png"} alt="" className="mail"/><b>Contact Us</b></h2>
          <div className="contact_detail">
            <label htmlFor="uname"><b>Name</b></label>
            <input className='input' type="text" name="uname" required/>
            <label htmlFor="psw"><b>Company</b></label>
            <input className='input' type="text" name="psw" required/>
            <label htmlFor="psw"><b>City</b></label>
            <input className='input' type="text" name="psw" required/>
            <label htmlFor="psw"><b>Email</b></label>
            <input className='input' type="text" name="psw" required/>
            <label htmlFor="psw"><b>Phone</b></label>
            <input className='input' type="text" name="psw" required/>
            <button type="submit">Submit</button>
          </div>
        </div>

      </div>

      </main>
    </div>
    </div>
  )
}
