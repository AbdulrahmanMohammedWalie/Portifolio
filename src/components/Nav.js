import Logo from "../img/Logo.png";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState, useEffect } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [toggle, setToggle] = useState(faBars);
  const mobNav = useRef();
  const location = useLocation();
  useEffect(() => {
    setToggle(faBars);
    mobNav.current.style.left = "100%";
  }, [location.pathname]);
  return (
    <>
      <motion.nav
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="nav"
      >
        <Link to="/">
          <div className="logo mouse">
            <motion.img
              className="img mouse"
              src={Logo}
              alt="Logo"
              alt="Computer"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: "100%", rotate: 360 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </Link>
        <div className="nav-links">
          <ul>
            <Link to="/">
              <li>
                <a className="anchor mouse">Home</a>
              </li>
            </Link>
            <Link to="/projects">
              <li>
                <a className="anchor mouse">Projects</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a className="anchor mouse">Contact</a>
              </li>
            </Link>
          </ul>
        </div>
        <div
          className="adds"
          onClick={() => {
            if (toggle === faBars) {
              setToggle(faTimes);
              mobNav.current.style.left = 0;
            } else {
              setToggle(faBars);
              mobNav.current.style.left = "100vw";
            }
          }}
        >
          <FontAwesomeIcon icon={toggle} size="5x" color="#1f78ff" />
        </div>
      </motion.nav>
      <nav className="Mobile-nav" ref={mobNav}>
        <ul>
          <Link to="/">
            <li>
              <a className="anchor mouse">Home</a>
            </li>
          </Link>
          <Link to="/projects">
            <li>
              <a className="anchor mouse">Projects</a>
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <a className="anchor mouse">Contact</a>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
