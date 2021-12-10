
import classes from './SideBar.module.css';
const SideBar = props=>{
    return(
        <div className={classes.sidebar}>
            <div className={classes.logo}>
                <h1>S</h1>
                <p>Web Developer <br/>App Developer</p>
            </div>
            <ul>
                <li>About</li>
                <li>My skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default SideBar;