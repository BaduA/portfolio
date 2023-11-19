import logo from "./logo.svg";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Navbar></Navbar>
      <div className="container color2">
        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/skills" element={<Skills></Skills>} />
          <Route path="/projects" element={<Projects></Projects>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
