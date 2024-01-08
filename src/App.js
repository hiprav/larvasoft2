
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Home2 from './Pages/Home2';
import Privacy_policy from './Pages/Privacy_policy';
import Term_condition from './Pages/Term_condition';
import Error from './Pages/Error';

  export default function App() {
    return (
      <BrowserRouter>
      <Routes>
       <Route index element={<Home2/>}/>
       <Route path="/home" element={<Home2/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/policy" element={<Privacy_policy/>}/>
       <Route path="/term_condition" element={<Term_condition/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    );
  }


