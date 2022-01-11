import React from "react";
import CommonButton from "../components/CommonButton";
import SideBar from "../components/SideBar";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import AppBar from "../components/AppBar";

const HomePage = (props) => {
  let dots = [];
  
  const clickHandler = () => {
    
  };

  
    let mouse = {
      x: 0,
      y: 0,
    };

  // The Dot object used to scaffold the dots
  var Dot = function () {
    this.x = 0;
    this.y = 0;

    this.node = (function () {
      var n = document.createElement("div");
      n.className = classes.trail;
      document.body.prepend(n);
      return n;
    })();
  };
  // The Dot.prototype.draw() method sets the position of
  // the object's <div> node
  Dot.prototype.draw = function () {
    this.node.style.left = this.x + "px";
    this.node.style.top = this.y + "px";
  };

  // Creates the Dot objects, populates the dots array
  for (var i = 0; i < 100; i++) {
    var d = new Dot();
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x + 150,
      y = mouse.y - 150;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.2;
      y += (nextDot.y - dot.y) * 0.2;
    });
  }

  document.addEventListener("mousemove", function (event) {
    //event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });

  // animate() calls draw() then recursively calls itself
  // everytime the screen repaints via requestAnimationFrame().
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  // And get it started by calling animate().
  animate();

  return (
    <div className={classes.homepage}>
      

      <div className={classes.sidedisp}>
        <SideBar />
      </div>
      <div className={classes.appdisp}>
        <AppBar/>
      </div>

      <div className={classes.content}>
        <h5>&lt;html&gt;</h5>
        <h5 style={{ padding: "0 2%" }}>&lt;body&gt;</h5>
        <h5 style={{ padding: "12vh 0 0 3%" }}>&lt;h1&gt;</h5>
        <div className={classes.hometitle}>
          <span>H</span>
          <span>e</span>
          <span>y</span>
          <span>,&nbsp;</span>
          <br />
          <span>I</span>
          <span>'</span>
          <span>m&nbsp;</span>
          <span>S</span>
          <span>r</span>
          <span>e</span>
          <span>y</span>
          <span>a</span>
          <span>s</span>
          <span>,</span>
          <br />
          <span>F</span>
          <span>u</span>
          <span>l</span>
          <span>l</span>
          <span>s</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>k&nbsp;</span>
          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </div>
        <h5 style={{ paddingLeft: "3%" }}>&lt;/h1&gt;</h5>
        <h5 style={{ paddingLeft: "3%" }}>&lt;p&gt;</h5>
        <p id={classes.specialText}>Flutter, ReactJs & Express Developer</p>
        <h5 style={{ paddingLeft: "3%" }}>&lt;/p&gt;</h5>
        <Link to="/contact">
          <CommonButton
            title="Contact me!"
            type="text"
            onClick={clickHandler}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
