import classes from "./AboutPage.module.css";
import SideBar from "../components/SideBar";
const AboutPage = (props) => {
  return (
    <div className={classes.aboutpage}>
      <div className={classes.sidedisp}>
        <SideBar />
      </div>
      <div className={classes.content}>
        <h5>&lt;section&gt;</h5>
        <h5 style={{ paddingLeft: "3%", paddingTop: "5vh" }}>&lt;h2&gt;</h5>
        <div className={classes.abouttitle}>
          <span>H</span>
          <span>e</span>
          <span>y</span>
          <span>,&nbsp;</span>
          <span>I'</span>
          <span>m&nbsp;</span>
          <span>S</span>
          <span>r</span>
          <span>e</span>
          <span>y</span>
          <span>a</span>
          <span>s</span>
          <h5 style={{ paddingLeft: "0", display: "inline-block" }}>
            &lt;/h2&gt;
          </h5>
          <h5 style={{ paddingLeft: "0" }}>&lt;p&gt;</h5>

          <p>
            I'm a Fullstack Web & App Developer from Bangalore, India. I have a
            passion for designing and developing websites and applications.
          </p>
          <br />
          <p>
            I love programming and problem solving, Self taught and still
            learning!!! Fortunate and lucky for where I am in life.
          </p>
          <br />
          <p>
            Fond of interacting with different people, I learn a lot from the
            people around me. Love sports and esports!
          </p>
          <br />
          <p>
            Interested in working and collaborating with people in creative
            projects related to fullstack development
          </p>
          <h5 style={{ paddingLeft: "0" }}>&lt;/p&gt;</h5>
        </div>
        <h5 style={{paddingTop:"3vh"}}>&lt;section&gt;</h5>
      </div>
    </div>
  );
};
export default AboutPage;
