
import React,{useState} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



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
        <form 
        action="https://formspree.io/f/xanydbba"
        method="POST"
        className="w-full max-w-lg mx-auto mb-10">
          <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-yellow-400"
            rows="6"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-full font-bold hover:bg-yellow-300 transition duration-300"
        >
          Send
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
