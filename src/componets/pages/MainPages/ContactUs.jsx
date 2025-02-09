import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contactPage">
      <div className="contact-us">
        <h2 style={{color:"white"}} >Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            OK
          </button>
        </form>
        <div className="contact-options">
          <p>Or reach us directly:</p>
          <p>
            <a href="tel:+919876541230" className="contact-link">
              Call Us: +91 9876 541 230
            </a>
          </p>
          <p>
            <a href="mailto:simmguitar@gmail.com" className="contact-link">
              Email Us: simmguitar@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
