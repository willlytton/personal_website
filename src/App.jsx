import { Routes, Route, Outlet, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ArtPage from "./pages/ArtPage";
import Projects from "./pages/Projects";
import Custom404 from "./pages/404";
import "./App.css";

const App = () => {
  return (
    <div className="bg-gradient-to-br from-orange-400">
      <div>
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<ArtPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Outlet />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
