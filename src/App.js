
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Home2 from './Pages/Home2';

  export default function App() {
    return (
      <BrowserRouter>
      <Routes>
       
          {/* <Route index element={<Home2 />} /> */}
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home2/>} />
      
      </Routes>
    </BrowserRouter>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

