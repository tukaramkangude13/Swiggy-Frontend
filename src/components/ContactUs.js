import React, { useState } from 'react';


export const ContactUs = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to manage form submission success/error
  const [formStatus, setFormStatus] = useState('');

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all fields.');
      return;
    }

    // Simulate a successful submission
    setFormStatus('Thank you for reaching out! We will get back to you soon.');

    // You can implement an actual API call or logic to submit the form data
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          Have a question or need help? Feel free to reach out to us, and we’ll get back to you as soon as possible.
        </p>

        {/* Form */}
      
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>

        {/* Form Status */}
        {formStatus && (
          <div className="mt-4 text-center text-gray-600">
            <p>{formStatus}</p>
          </div>
        )}
      </div>

      <div className="mt-8 text-gray-500 text-sm text-center">
        <p>📞 Customer Support: +91 9876543210</p>
        <p>📧 Email: support@swiggyclone.com</p>
        <p>🏢 Address: 123 Foodie Street, Swiggy City, India</p>
      </div>

      {/* Offer Card Section */}
    </div>
  );
};

export default ContactUs;
