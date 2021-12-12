import SideBar from '../components/SideBar';
import classes from './ContactPage.module.css';

const ContactPage=props=>{
    return(
        <div className={classes.contactpage}>
            <div className={classes.sidedisp}>
                <SideBar/>
            </div>
        </div>
    )
}
export default ContactPage;