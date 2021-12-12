
import { Link } from 'react-router-dom';
import classes from './SideBar.module.css';
const SideBar = props=>{
    return(
        <div className={classes.sidebar}>
            <div className={classes.logo}>
                <h1>S</h1>
                <p>Web Developer <br/>App Developer</p>
            </div>
            <ul>
                <li><Link to="/about" style={{textDecoration:"none",color:"inherit"}}>About</Link></li>
                <li><Link to="/skills" style={{textDecoration:"none",color:"inherit"}}>My Skills</Link></li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default SideBar;