import Nav from "./components/Nav";
import "./styles/style.scss";
//Pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import { Route, Routes } from "react-router-dom";
import Four from "./pages/four/Four";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pro" exact element={<Projects />} />
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
