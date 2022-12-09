import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
       
      <table> 
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
         
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Contact Information </span>
          <span> </span>
          <span> </span>
          <span>671 Soda Hall</span>
          <span>tel: 510-642-0572</span>
          <span>vazirani@cs.berkeley.edu</span>
          <div className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
         
           
           
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      </table>
      <hr/>
      <table> 
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>


         
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}> Assistant </span>
          <span> </span>
          <span> </span>
          <span>Olivia Chen</span>
          <span>695 Soda</span>
          <span>(510) 642-9467</span>
          <span>theoryadmin@eecs.berkeley.edu</span>
          <div className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
         
           
           
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      </table>
      <hr/>
      <table> 
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>


         
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}> Research Support</span>
          <span> </span>
          <span> </span>
          <span>David Wemhaner</span>
          <span>dwemhaner@berkeley.edu</span>
           
          <div className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
         
           
           
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
      </table>
    </div>
     
  );
};

export default Contact;
