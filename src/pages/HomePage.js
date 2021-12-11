import React from "react";
import SideBar from "../components/SideBar";
import classes from "./HomePage.module.css";
const HomePage = (props) => {
  var dots = [],
    mouse = {
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
  for (var i = 0; i < 30; i++) {
    var d = new Dot();
    dots.push(d);
  }

  // This is the screen redraw function
  function draw() {
    // Make sure the mouse position is set everytime
    // draw() is called.
    var x = mouse.x+150,
      y = mouse.y-150;

    // This loop is where all the 90s magic happens
    dots.forEach(function (dot, index, dots) {
      var nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.6;
      y += (nextDot.y - dot.y) * 0.6;
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
      <SideBar />
      <div className={classes.content}>
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
    </div>
  );
};

export default HomePage;
