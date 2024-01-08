import React from 'react'
import { Link,Outlet } from "react-router-dom";
import "../Css/Nav.css";


export default function Navbar() {
  return ( 
       <header>
        <nav className="n1">
       <img className="larva-img1" src={"./images/larva.png"} alt="" />
       <input type="checkbox" id="toggler" name=""/> 
       <label className='label' htmlFor="toggler"><i className="fa fa-bars"></i></label>
       <div className="menu" >
        <ul className="n1-ul">
          <li><Link to="/"><button className="btn basic-3"><b className='btn_nav'>HOME</b></button></Link></li>
		      <li><Link to="/contact"><button className="btn basic-3"><b className='btn_nav'>CONTACT</b></button></Link></li>
			    <li><Link to="/policy"> <button className="btn basic-3"><b className='btn_nav'>PRIVACY POLICY</b></button></Link></li>
			    <li><Link to="/term_condition"> <button className="btn basic-3"><b className='btn_nav'>TERM & CONDITIONS</b></button></Link></li>
          <li><Link to="/login"><button className="btn basic-3"><b className='btn_nav'>LOGIN</b></button></Link></li>
		  	</ul>
        </div>
        </nav>
        <Outlet />
      </header>
  )
}
