import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Awards from "./pages/Awards";
import Experience from "./pages/Experience";
import Interest from "./pages/Interest";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
    </div>
  );
}

export default App;
