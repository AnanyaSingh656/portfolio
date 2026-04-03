import React, { useState } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser'; // for ppl to connect with me via email    

// useState is a React Hook, it lets us store and update data inside a component
// here we use it to track what the user types in the form
function Contact() {

  // formData holds the current values of all 3 fields
  // setFormData is the function we call to update them
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false); // to track if email is being sent

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    // e.target.name tells us WHICH field changed (name/email/message)
   // e.target.value is what they typed
  // ...formData keeps the other fields unchanged
  // [e.target.name] updates only the field that was typed in


 const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_fmgzayi',
      'template_69qb7tm',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'NaOLsxEjoqlKHL3Kl'
    )
    .then(() => {
      alert('Message sent! I will get back to you soon!💌');
      setFormData({ name: '', email: '', message: '' });
      setIsSending(false);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      alert('Oops! Something went wrong. No worries, please try again.');
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="contact section">

      <h2 className="section-title">Do Get In Touch</h2><br/>
      <p className="section-subtitle">Want to connect or just say  a hello?</p>

      <div className="contact-container">

        {/* LEFT — contact info cards */}
        <div className="contact-info">

          <p className="contact-intro">
            I'm currently open to internship opportunities and collaborations.
            Feel free to reach out. I'd love to connect!
          </p>

          <div className="contact-details">

            <div className="contact-detail-item">
              <span className="contact-detail-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>connectwithananyasingh@gmail.com</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-icon">💼</span>
              <div>
                <h4>LinkedIn</h4>
                <p>www.linkedin.com/in/ananya-singh-as656</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-icon">🐙</span>
              <div>
                <h4>GitHub</h4>
                <p>https://github.com/AnanyaSingh656</p>
              </div>
            </div>

            <div className="contact-detail-item">
              <span className="contact-detail-icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Pune, Maharashtra, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — the form */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Your Name:</label>
            {/* name="name" must match the key in formData */}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Leave a message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Hi, I would love to connect..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit"className="btn btn-primary contact-btn" disabled={isSending}
            >   
            {isSending ? 'Sending...' : 'Send Message 💌'}
           </button>

        </form>
      </div>

    </section>
  );
}

export default Contact;