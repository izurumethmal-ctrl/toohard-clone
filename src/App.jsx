import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar"; // 👈 HERE (top of file)

import Home from "./Pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* 👈 Navbar placed here */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
