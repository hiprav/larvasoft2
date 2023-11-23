import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="ft">
   
        <div className="ft1-div1">
          <div className="foothead">
            <h2 className="h"><b>Click on QR or Scan to Contact Us</b></h2>
          </div>
          <img className="foothead-QR" src={"./images/download.png"} alt="" />
        </div>

        <div className="ft1-div2"><br />
        <img src={"./images/larva.png"} alt="" /> <br />
          <div className="ft1-div3">
            <a href="/">OUR PRODUCT</a>
            <a href="/">SERVICES</a>
            <a href="/">CONTACT US</a> 
            <a href="/">LOGIN</a>
          </div><br /><br />
          </div>
        
          <div className="ft1-d4">
            <h4>Get in Touch</h4>
            <div className="logo">
              <img className="sos" src={"./images/f.png"} alt="" />
              <img className="sos" src={"./images/i.png"} alt="" />
              <img className="sos" src={"./images/t.png"} alt="" />
              <img className="sos" src={"./images/p.png"} alt="" />
            </div>
          </div>
     
          
        <div className="ft1-d5"> 
          <h4 className="last"><b>Address</b></h4>
          <p className="last1">
            Opp .Criticar Hospital, Bhandup West,Mumbai-78</p>
        </div>
      </footer>
    </div>
  )
}
