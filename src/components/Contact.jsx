import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-12 text-center">Contact Me</h3>
        <form className="w-full max-w-lg mx-auto">
          <div className="mb-6">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="mb-6">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="mb-6">
            <textarea 
              placeholder="Your Message" 
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
              rows="6"
            ></textarea>
          </div>
          <button className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
