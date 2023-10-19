
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CONTACT from './Pages/Contact';
import Login from './Pages/Login'
import Home2 from './Pages/Home2';
import Layout from './Pages/Layout';


/** 
  <Route index element={<Home2/>}/>
  <Route index path='/home' element={<Home/>}/>
  <Route path="/contact" element={<CONTACT />} />
  <Route path="/login" element={<Login/>} />
  <Route path="/h2" element={<Home2/>} />
  */

  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2/>}>
          <Route index element={<Home2/>}/>

  <Route path="/contact" element={<CONTACT />} />
  <Route path="/login" element={<Login/>} />
  <Route path="/h2" element={<Home2/>} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

