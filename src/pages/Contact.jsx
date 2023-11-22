import React, { useState } from 'react';

// <!--Start of the Contact Page-->
export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate required fields
    setErrors({
      ...errors,
      [name]: value.trim() === '' ? 'Text is required' : '',
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate required fields on blur
    setErrors({
      ...errors,
      [name]: value.trim() === '' ? 'Text is required' : '',
    });
  };

  const handleEmailBlur = (e) => {
    const { value } = e.target;

    // Validate email format
    setErrors({
      ...errors,
      email: !/^\S+@\S+\.\S+$/.test(value) ? 'Invalid email address' : '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Additional validation or form submission logic can be added here
    console.log('Form submitted:', formData);
  };

  return (
    <div className = "about" id="contact-box">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="contact-text" htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label className="contact-text" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
          />
          {errors.email && <p classNameName="error">{errors.email}</p>}
        </div>

        <div>
          <label className="contact-text" htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button className="button" id="contact-button" type="submit">Submit</button>
      </form>
    </div>
  );
};

