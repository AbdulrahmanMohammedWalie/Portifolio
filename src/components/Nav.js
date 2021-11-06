import Logo from "../img/Logo.png";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <motion.nav
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
    >
      <div className="logo">
        <motion.img
          src={Logo}
          alt="Logo"
          alt="Computer"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: "100%", rotate: 360 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Nav;
