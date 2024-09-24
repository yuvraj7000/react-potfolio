
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20  text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="dd">
            <p className="text-4xl font-bold mb-10 text-center anime">Contact Me</p>
          </div>
        </div>
        <p className="text-center text-lg mb-5">
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>
        <form className="w-full max-w-lg mx-auto mb-10">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
              rows="6"
            ></textarea>
          </div>
          <button className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300">
            Send Message
          </button>
        </form>
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://github.com/yuvraj7000raju"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yuvraj-yadav-1b7984259/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-yellow-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="text-center mt-5">
          <p className="text-lg">
            Or drop me an email at:{" "}
            <a
              href="mailto:yuvraj7000raju@gmail.com"
              className="text-yellow-400 hover:text-yellow-300"
            >
              yuvraj7000raju@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
