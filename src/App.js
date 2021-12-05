import Nav from "./components/Nav";
import "./styles/style.scss";
//Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import { Route, Routes } from "react-router-dom";
import Four from "./pages/four/Four";
import Footer from "./components/Footer";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/Portifolio" exact element={<Home />} />
        <Route path="/" exact element={<Four />} />
        <Route path="/projects" exact element={<Projects />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/:something" element={<Four />} />
        <Route path="/:something/:something" element={<Four />} />
        <Route path="/:something/:something/:something" element={<Four />} />
        <Route
          path="/:something/:something/:something/:something"
          element={<Four />}
        />
        <Route
          path="/:something/:something/:something/:something/:something"
          element={<Four />}
        />
        <Route
          path="/:something/:something/:something/:something/:something/:something"
          element={<Four />}
        />
        <Route
          path="/:something/:something/:something/:something/:something/:something/:something"
          element={<Four />}
        />
        <Route
          path="/:something/:something/:something/:something/:something/:something/:something/:something"
          element={<Four />}
        />
        <Route
          path="/:something/:something/:something/:something/:something/:something/:something/:something/:something"
          element={<Four />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
