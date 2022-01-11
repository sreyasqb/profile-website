import SideBar from "../components/SideBar";
import classes from "./SkillsPage.module.css";
import AppBar from "../components/AppBar";
const SkillsPage = (props) => {
  return (
    <div className={classes.skillspage}>
      <div className={classes.sidedisp}>
        <SideBar />
      </div>
      <div className={classes.appdisp}>
        <AppBar/>
      </div>
      <div className={classes.skillscontent}>
        <h5>&lt;section&gt;</h5>
        <h5 style={{ paddingLeft: "3%", paddingTop: "5vh" }}>&lt;h2&gt;</h5>
        <div className={classes.skillstitle}>
          <span>S</span>
          <span>k</span>
          <span>i</span>
          <span>l</span>
          <span>l</span>
          <span>s&nbsp;</span>
          <span>&</span>
          <br />
          <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
          <span>i</span>
          <span>e</span>
          <span>n</span>
          <span>c</span>
          <span>e</span>

          <h5 style={{ paddingLeft: "0", display: "inline-block" }}>
            &lt;/h2&gt;
          </h5>
          <h5 style={{ paddingLeft: "0" }}>&lt;p&gt;</h5>
          <p>
            When I started coing it was purely for passion, I started with
            creating games on pygame, Then soon I switched to algorithm based
            coding & participated in many hackathons.
          </p>
          <br />
          <p>
            After 2 years of programming, I started with app development, And
            naturally that made me explored NodeJs which helped me integrate
            front-end and back-end.
          </p>
          <br />
          <p>
            Ever since I have been mainly developing applications and websites,
            I have done a 6 month internship for fullstack app development.
          </p>
          <br />
          <p>
            Programming is vast hence I love exploring different fields. But my
            most passionate has been web development and app development.
          </p>
          <h5 style={{ paddingLeft: "0" }}>&lt;/p&gt;</h5>
        </div>
        <h5 style={{ paddingTop: "5vh" }}>&lt;/section&gt;</h5>
      </div>
    </div>
  );
};
export default SkillsPage;
