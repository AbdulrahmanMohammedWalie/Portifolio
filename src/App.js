import Nav from "./components/Nav";
import "./styles/style.scss";
//Pages
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
