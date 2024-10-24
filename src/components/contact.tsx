"use client";

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formAction = (e) => {
    e.preventDefault();
    if (!formData.message) {
      setError('Message is required.');
      return;
    }
    
    console.log(formData, "Form Value");
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="min-h-screen relative bg-gray-700 py-16 px-4 md:px-8 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="min-h-screen bg-gray-700 opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-wider">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <form
            className="w-full bg-white/10 p-8 rounded-xl shadow-xl backdrop-blur-md"
            onSubmit={formAction}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="name">
                  Name <span className="text-gray-500 text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="email">
                  Email <span className="text-gray-500 text-sm">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-lg font-semibold mb-2" htmlFor="message">
                  Message <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all"
                  required
                />
              </div>

              {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
              {success && <p className="text-green-500 font-semibold text-center">Message sent successfully!</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
