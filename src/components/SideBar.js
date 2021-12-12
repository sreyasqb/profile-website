import { Link } from "react-router-dom";
import classes from "./SideBar.module.css";
const SideBar = (props) => {
  return (
    <div className={classes.sidebar}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div className={classes.logo}>
          <h1>S</h1>
          <p>
            Web Developer <br />
            App Developer
          </p>
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
  );
};
export default SideBar;
