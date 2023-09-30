import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ArtPage from "./components/pages/ArtPage";
import Projects from "./components/pages/Projects";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/artpage"
          element={<ArtPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
