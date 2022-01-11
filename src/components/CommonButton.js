import "./CommonButton.module.css";
const CommonButton = (props) => {
  const clickHandler = (event) => {
    if (props.type === "submit") event.preventDefault();
    props.onClick();
  };
  return (
    <button type={props.type} onClick={clickHandler}>
      {props.title}
      {props.children}
    </button>
  );
};
export default CommonButton;
