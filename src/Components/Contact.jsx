import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import "../assets/css/contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      service_id: "service_alknp9p",
      template_id: "template_q4g3lay",
      user_id: "m-zr6vdxQgsV9qrHn",
      template_params: {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        user_message: formData.message,
      },
    };

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          'origin': 'http://localhost',
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
        const errData = await res.text();
        console.error("EmailJS Error:", errData);
      }
    } catch (error) {
      alert("Something went wrong. Try again later.");
      console.error("Fetch Error:", error);
    }
  };

  // useEffect(() => {
  //   emailjs.init("mzqZ4UVx_b4sAF6xS");
  // }, []);

  return (
    <section className="contact--main--container">
      <motion.div
        className="contact--header--section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact--header--paragraph">Let's Get in Touch</h2>
        <p className="contact--sub--body--paragraph">
          I'd love to hear about your project or just say hello!
        </p>
      </motion.div>

      <motion.form
        className="contact--form--section"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact--form--inputrow">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="contact--form--inputfull"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="contact--form--textarea"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <motion.button
          type="submit"
          className="contact--form--button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default ContactForm;