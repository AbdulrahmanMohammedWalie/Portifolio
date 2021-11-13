import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer>
      <div className="copy">
        <FontAwesomeIcon
          icon={faCopyright}
          size="5x"
          color="#1f78ff"
          style={{ margin: 20 }}
        />
      </div>
      <div className="text">
        <h1>Abdulrahman</h1>
      </div>
      <div className="icons">
        <a href="https://www.facebook.com/supers.abdulrahman">
          <FontAwesomeIcon
            icon={faFacebook}
            size="5x"
            color="#1f78ff"
            style={{ margin: 20 }}
          />
        </a>
        <a href="https://github.com/AbdulrahmanMohammedWalie">
          <FontAwesomeIcon
            icon={faGithub}
            size="5x"
            color="#1f78ff"
            style={{ margin: 20 }}
          />
        </a>
        <a href="https://twitter.com/Abdulra34088612">
          <FontAwesomeIcon
            icon={faTwitter}
            size="5x"
            color="#1f78ff"
            style={{ margin: 20 }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
