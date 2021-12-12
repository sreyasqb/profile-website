import CommonButton from "../components/CommonButton";
import SideBar from "../components/SideBar";
import classes from "./ContactPage.module.css";

const ContactPage = (props) => {
  return (
    <div className={classes.contactpage}>
      <div className={classes.sidedisp}>
        <SideBar />
      </div>
      <div className={classes.contactcontent}>
        <h5>&lt;section&gt;</h5>
        <h5 style={{ paddingLeft: "3%", paddingTop: "5vh" }}>&lt;h2&gt;</h5>
        <div className={classes.contacttitle}>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t&nbsp;</span>
          <span>M</span>
          <span>e</span>

          <h5 style={{ paddingLeft: "0", display: "inline-block" }}>
            &lt;/h2&gt;
          </h5>
        </div>
        <h5 style={{ paddingLeft: "3%", display: "inline-block" }}>
          &lt;p&gt;
        </h5>
        <p>
          I'm very ambitious when it comes to internships or large projects.
        </p>
        <p>
          However, If you have any queries or requests, don't hesitate to use
          the form below.
        </p>
        <h5 style={{ paddingLeft: "3%" }}>&lt;/p&gt;</h5>
        <h5 style={{ paddingLeft: "3%", paddingTop: "2vh" }}>&lt;form&gt;</h5>
        <input className={classes.name} placeholder="Name" />
        <input className={classes.email} placeholder="Email" type="email" />
        <input className={classes.subject} placeholder="Subject" />
        <textarea className={classes.message} placeholder="Message" />

        <CommonButton title="Send message!" />
        <h5 style={{ paddingLeft: "3%", paddingTop: "2vh" }}>&lt;/form&gt;</h5>
        <h5>&lt;/section&gt;</h5>

      </div>
    </div>
  );
};
export default ContactPage;
