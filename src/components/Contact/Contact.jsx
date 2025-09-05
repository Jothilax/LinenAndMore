import React, { useState } from "react";
import styles from "./contact.module.css";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", form);
  //   alert("Thank you! We will get back to you soon.");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Thank you! We will get back to you soon.");
  
    // reset form after submit
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  
  return (
    <div className={styles.contactPage}>
      <h1 className={styles.head}>Contact Us and Get a Quote</h1>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>First Name *</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Enter your first name here"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Enter your last name here"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.formGroup}>
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Example: user@website.com"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>Subject *</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Comments / Questions *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
