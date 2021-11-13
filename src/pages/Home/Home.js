import { Route, Routes } from "react-router";
import Four from "../four/Four";
import "./components/Hero";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Tools from "./components/ToolsList";
import "./styles/style.scss";

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Tools />
    </>
  );
};

export default Home;
