import Blogs from "./components/Blogs";
import Feature from "./components/Features";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Navigation/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Blogs" element={<Blogs />} />
    <Route path="/Projects" element={<Feature />} />
  </Routes>
    </div>
  );
}

export default App;
