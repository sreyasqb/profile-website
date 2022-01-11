import { Link } from "react-router-dom";
import classes from "./SideBar.module.css";
import { FaGithub, FaInstagram } from "react-icons/fa";
import {AiOutlineClose} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const SideBar = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.sidebar}>
      <div className={classes.close} onClick={()=>navigate(-1)}>
        <AiOutlineClose size={32}/>
      </div>
      <div className={classes.material}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className={classes.logo}>
            <h1>QB</h1>
            <h4>Web Developer</h4>
            <h4> & </h4>
            <h4>App Developer</h4>
          </div>
        </Link>
        <ul>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              My Skills
            </Link>
          </li>
          {/* <li>Work</li> */}
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={classes.social}>
        <ul>
          <li>
            <a
              href="https://www.github.com/sreyasqb"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/sreyasqb/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit" }}
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
