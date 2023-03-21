import React,{useRef} from 'react';
import emailjs from 'emailjs-com'
import Style from './App.module.css';
export default function Contact() {
  const form  = useRef(null);
  function sendEmail(e){
    console.log('iiii');
     e.preventDefault();
    emailjs.sendForm('service_jinjivi','template_731x4kr',form.current,'km-4gQIbDNi4BUbXC').then(res=>{
      console.log(res);
    }).catch(err=>{
console.log(err);
    });
    e.target.reset();
  }
  return (
    <div className={`${Style.ContactContainer} ${Style.animationTop}`}>
    <div className={Style.contactName}>
       <div className={Style.headingContactDiv}>
            <h1>Contact</h1>
            <div className={Style.borderContact}></div>
            </div>
            <div className={Style.formDiv}>
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type='text' name='name' required/>
  <label>Email</label>
  <input type='text' name='email' required/>
  <label>Message</label>
  <textarea  name='message' rows={8} required/>
  <input type='submit' className={Style.formButton} value='Send'/>
</form>
            </div>
      </div>
      </div>
  )
}
