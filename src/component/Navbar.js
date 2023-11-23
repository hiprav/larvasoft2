import React from 'react'
import { Link,Outlet } from "react-router-dom";

export default function Navbar() {
  return (
       <header>
        <nav className="n1">
       <img className="larva-img1" src={"./images/larva.png"} alt="" />
          <ul className="n1-ul">
            <li>
            <Link to="/"><button className="btn basic-3"><b>HOME</b></button></Link>
            </li>
            <li>
            <Link to="/contact"><button className="btn basic-3"><b>CONTACT</b></button></Link>
            </li>
            <li>
            <Link to="/privacy_policy"> <button className="btn basic-3"><b>PRIVACY POLICY</b></button></Link>
            </li>
            <li>
            <Link to="/term_condition"> <button className="btn basic-3"><b>TERM & CONDITIONS</b></button></Link>
            </li>
            <li>
            <Link to="/login"><button className="btn basic-3"><b>LOGIN</b></button></Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
  )
}
