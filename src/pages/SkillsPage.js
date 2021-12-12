import SideBar from "../components/SideBar";
import classes from "./SkillsPage.module.css";
const SkillsPage = (props) => {
  return (
    <div className={classes.SkillsPage}>
      <div className={classes.sidedisp}>
        <SideBar />
      </div>
    </div>
  );
};
export default SkillsPage;
