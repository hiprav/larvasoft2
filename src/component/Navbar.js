import React from 'react'
import { Link,Outlet } from "react-router-dom";

export default function Navbar() {
  return (
       <header>
        <nav className="n1">
       <img className="larva-img1" src={"./images/larva.png"} alt="" />
          <ul className="n1-ul">
            <li>
            <Link to="/contact"><button className="btn"><b>CONTACT</b></button></Link>
            </li>
            <li>
            <Link to="/"> <button className="btn"><b>PRIVACY POLICY</b></button></Link>
            </li>
            <li>
            <Link to="/"> <button className="btn"><b>TERM & CONDITIONS</b></button></Link>
            </li>
            <li>
            <Link to="/login"><button className="btn"><b>LOGIN</b></button></Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
  )
}
