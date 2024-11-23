import React from 'react';
import './Contact.css';
import message from '../../assets/images/msg-icon.png';
import mail_icon from '../../assets/images/mail-icon.png';
import phone_icon from '../../assets/images/phone-icon.png';
import location_icon from '../../assets/images/location-icon.png';
import white_arrow from '../../assets/images/white-arrow.png';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setResult("Sending...");
    const form = event.target; // Get the HTML form element
  
    emailjs
      .sendForm(
        'service_2uev33k',    // Replace with your EmailJS service ID
        'template_ahl8aca',   // Replace with your EmailJS template ID
        form,                 // Pass the form element here
        'gcIwoM69MGyBw53E4'   // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setResult("Form Submitted Successfully");
          form.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error("Submission Error:", error);
          setResult("There was an error submitting the form. Please try again.");
        }
      );
  };
  

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a message <img src={message} alt="" /></h3>
        <p>Have questions or need assistance? We're here to help! Reach out to TCIC for inquiries, support, or feedback. Fill out the form below or connect with us directly, and our team will get back to you promptly.</p>
        <ul>
          <li> <img src={mail_icon} alt="" />tcicinfocochin@gmail.com</li>
          <li> <img src={phone_icon} alt="" />88485 46357</li>
          <li>
            <img src={location_icon} alt="" />
            Training Center for International Career
            <br />
            CST Brothers Provincial Campus,
            Sea port Airport Road,
            <br />
            opp. Bharata Mata College,
            Near Chittilappilly Square,
            <br />
            Thrikkakara, Kochi-682021
          </li>
        </ul>
        {/* Embed the Google Map iframe here */}
        <div className="map-container">
          <iframe
            title="TCIC Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8134090381845!2d76.33632477354128!3d10.03225117248197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080df52cb91d87%3A0x8270e6ce10a8d8a6!2sTCIC!5e0!3m2!1sen!2sin!4v1732092853111!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name="from_name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Contact Number" required />
          <label>Write your messages</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
