import React from 'react'
import './Contact.css'
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_eb2x2so', form.current, 'lcCv-O-asovJsiE34')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id="contact" className="contact-container">
      
      <div className="contact-wrapper">
        
   <h1> Don't be a stranger!</h1>
   <h3>Let's Connect!</h3>

<div className="contact-flex"> 
   <div className="contact-details">
    <h3>I am invested on improving my skills and challenging myself. I am open to expand my network.</h3>
    <h4>***Any feedback will be well appreciated.***</h4>
    <h4>Feel free to email me and I will get back to you.</h4>
    <h4 id="italic-ptag">"Technology is best when it brings people together 🤓."</h4>
    <p>-Matt Mullenweg</p>
   </div>
   
     
   <form className="contact-sub-container"> 
    <div>
    <labe>Full Name * :</labe>
    <input type="text" className="inputs" placeholder="Elvin Brown"/>
    </div>

    <div>
    <label>Number * :</label>
    <input type="text" className="inputs" placeholder="444-444-4444"/> 
    </div>

    <div>
      <label for="mail">Email * :</label>
      <input type="email" className="inputs" placeholder="elvinb@gmail.com"/>
    </div>

    <div className="message-container">
      <label for="Message" id="message-label">Message * :</label>
      <textarea id="message"  name="message" placeholder="write your message here"/>
    </div>
    
    <button id="submit-button" type="submit">Submit</button>
    


   </form>
   </div>
  </div>
   
   
    </section>
  )
}
