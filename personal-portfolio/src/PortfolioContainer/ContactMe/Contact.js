import React from 'react'
import './Contact.css'
import emailjs from "emailjs-com";

export const Contact = () => {
 

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_sepub6i', 'template_eb2x2so', e.target, 'lcCv-O-asovJsiE34')
      .then((result) => {
        alert("Message sent sucessfully!")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          alert("Email service is temporally down, you can contact me directly at ananyeli01@gmail.com")
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
   
     
   <form className="contact-sub-container" onSubmit={sendEmail}> 
    <div>
    <labe>Full Name * :</labe>
    <input type="text" className="inputs" placeholder="Elvin Brown" name="user_name"/>
    </div>

    <div>
    <label>Number * :</label>
    <input type="text" className="inputs" placeholder="444-444-4444" name="phone"/> 
    </div>

    <div>
      <label for="mail">Email * :</label>
      <input type="email" className="inputs" placeholder="elvinb@gmail.com" name="email" required/>
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
