import CommonButton from "../components/CommonButton";
import SideBar from "../components/SideBar";
import classes from "./ContactPage.module.css";
import emailjs from "emailjs-com";
import {useRef,useState} from 'react';
import AppBar from "../components/AppBar";

const ContactPage = (props) => {
  const form=useRef();
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');
  const [sent,setSent]=useState(0); //0-inital 1-fail 2-success
  const nameHandler=event=>{
    setName(event.target.value);
    setSent(0);
  }
  const emailHandler=event=>{
    setEmail(event.target.value);
    setSent(0);
  }
  const subjectHandler=event=>{
    setSubject(event.target.value);
    setSent(0);
  }
  const messageHandler=event=>{
    setMessage(event.target.value);
    setSent(0);
  }

  const sendEmail = (event) => {
    if (!(name && email && subject && message)) {
      setSent(2);
      return;
    }
    emailjs
      .sendForm(
        "gmail",
        "template_mcq2ldn",
        form.current,
        "user_WHRyv7OFg4OMrMaET5j5a"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(1);
        },
        (error) => {
          console.log(error.text);
          setSent(2);
        }
      );
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className={classes.contactpage}>
      <div className={classes.sidedisp}>
        <SideBar />
      </div>
      <div className={classes.appdisp}>
        <AppBar/>
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
        <form ref={form}>
          <input className={classes.name} placeholder="Name" name="name" value={name} onChange={nameHandler} required/>
          <input className={classes.email} placeholder="Email" type="email" name="email" value={email} onChange={emailHandler}/>
          <input className={classes.subject} placeholder="Subject" name="subject" value={subject} onChange={subjectHandler}/>
          <textarea className={classes.message} placeholder="Message" name="message" value={message} onChange={messageHandler}/>
          {sent===1 && <h5 style={{ paddingLeft: "6%",color:"#08fdd8"}}>Message sent</h5>}
          {sent===2 && <h5 style={{ paddingLeft: "6%",color:"rgb(185, 46, 46)"}}>Invalid Input</h5>}
          <CommonButton
            title="Send message!"
            type="submit"
            onClick={sendEmail}
          />
        </form>
        
        <h5 style={{ paddingLeft: "3%", paddingTop: "2vh" }}>&lt;/form&gt;</h5>
        <h5>&lt;/section&gt;</h5>
      </div>
    </div>
  );
};
export default ContactPage;
