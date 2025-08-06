import React, { useState } from 'react';

function Contact() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    try {
      const response = await fetch("https://formspree.io/f/mldlwqdg", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
     <div style={{backgroundColor: "#f0f0f0"}}>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p className="text-center mb-4">
        We wish to hear from you! Fill in the form below and we'll get back to you shortly.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-8">
          {formStatus === "success" && (
            <div className="alert alert-success text-center">Message sent successfully!</div>
          )}
          {formStatus === "error" && (
            <div className="alert alert-danger text-center">Oops! Something went wrong. Please try again.</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" name="name" className="form-control" id="name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" name="email" className="form-control" id="email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea name="message" className="form-control" id="message" rows="5" required></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-danger">Send Message</button>
            </div>
          </form> <br />

         <div className="col-md-6 mt-4 mt-md-0">
        <h5>Email</h5>
        <p>enyimchinonso23@gmail.com</p>
        <h5>Phone</h5>
        <p>+234 810 811 1761</p>
        <h5>Socials</h5>
        <a
          href="https://www.linkedin.com/in/chinonso-enyim-1435762a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Enyim-Chinonso"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          GitHub
        </a>
        <a
          href="https://facebook.com/Chinonso Enyim"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          Facebook
        </a>
        <a
          href="https://wa.me/8108111761"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          WhatsApp
        </a> <br />
        <a
          href="https://slack.com/Enyim Chinonso"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3"
        >
          Slack
        </a>
      </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
