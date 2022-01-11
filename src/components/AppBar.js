import classes from "./AppBar.module.css";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
const AppBar = (props) => {
  return (
    <Link to="/options">
      <div className={classes.appbar} align="right">
        <FiMenu size={32} />
      </div>
    </Link>
  );
};
export default AppBar;
