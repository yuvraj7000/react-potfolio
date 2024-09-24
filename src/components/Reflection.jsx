import { MdArrowBackIosNew } from "react-icons/md";
import { reflectionanimation } from "../assets/animation";
import Lottie from "lottie-react";
import ReflectionCard from "./ReflectionCard";
import "./reflection.css";
import { useState } from "react";

export default function Reflection() {
  const [selectedReflection, setSelectedReflection] = useState(null);
  const [startIndex, setStartIndex] = useState(0); 

  const reflections = [
    {
      title: "Growth in Web Development",
      content: `Learning web development through Hitesh Choudhary's YouTube channel has been a game-changer for me. From understanding the basics of JavaScript and React to mastering the MERN stack, this journey has not only enhanced my technical skills but also improved my problem-solving abilities.`,
    },
    {
      title: "Adapting to New Technologies",
      content: `The tech landscape is constantly evolving, and throughout my web development journey, I've learned the importance of staying agile and adaptable. Diving into new frameworks such as React and Tailwind CSS has been both challenging and rewarding. React has transformed how I approach front-end development, making my code more modular and efficient, while Tailwind CSS has streamlined my design process, allowing me to create responsive, modern interfaces with minimal effort.`,
    },
    {
      title: "Hackathon Experience!",
      content: `Our team participated in HackNDore, a 48-hour hackathon organized by Indore Municipal Corporation! 🌟 <br/> Our project focused on developing a Water Supply Management System designed to track water usage across Indore city. By integrating smart IoT water meters, our solution monitors water consumption in real-time, detects potential leakages by analyzing pressure differences, and provides crucial data insights to assist government decision-making. 💧<br /> <a href="https://www.linkedin.com/posts/yuvraj-yadav-1b7984259_hackndore-hackathon-watersupplymanagement-activity-7225755493313466368-9Ohf?utm_source=share&utm_medium=member_desktop" target="_blank" class="text-blue-400 underline">see post here</a>`,
    },
    {
      title: "Practice Projects",
      content: `I've built several practice projects to gain confidence in web development, including fun and interactive games like <span class="text-red-500">Sino Game</span> and <span class="text-green-500">Tic-Tac-Toe</span> using HTML, CSS, and JavaScript. I also experimented with replicating the <span class="text-blue-500">Flipkart frontend</span> and created <span class="text-purple-500">TodoList applications</span>, with the advanced version built in <span class="text-orange-500">React</span> to enhance my skills in dynamic user interfaces. <br/> You can see this Projects - <br/><a href="https://www.linkedin.com/posts/yuvraj-yadav-1b7984259_webdevelopment-html-css-activity-7179427392661143552-uUYT?utm_source=share&utm_medium=member_desktop" target="_blank" class="text-blue-400 underline">see projects</a><br/><a href="https://www.linkedin.com/posts/yuvraj-yadav-1b7984259_react-redux-statemanagement-activity-7182824674769203200-sBfY?utm_source=share&utm_medium=member_desktop" target="_blank" class="text-blue-400 underline">ToDo React app</a>`

    },

  ];

  const reflectionsPerPage = 3;
  const totalReflections = reflections.length;

 
  const displayedReflections = reflections.slice(
    startIndex,
    startIndex + reflectionsPerPage
  );


  const handleNext = () => {
    if (startIndex + reflectionsPerPage < totalReflections) {
      setStartIndex(startIndex + reflectionsPerPage);
    }
  };

  const handleBack = () => {
    if (startIndex - reflectionsPerPage >= 0) {
      setStartIndex(startIndex - reflectionsPerPage);
    }
  };

  return (
    <section id="reflections" className="bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="dd">
            <p className="text-4xl font-bold mb-5 text-center anime">
              Reflections
            </p>
          </div>
        </div>

        <div className="reflection-container">
         
          <div className="reflection-left">
            {displayedReflections.map((reflection, index) => (
              <ReflectionCard
                key={index}
                title={reflection.title}
                content={reflection.content}
                onReadMore={() => setSelectedReflection(reflection)}
                onReadLess={() => setSelectedReflection(null)} // Restore animation when 'Read Less' is clicked
              />
            ))}

          
            <div className="flex justify-between mt-6">
            <button
  className={`flex items-center justify-center text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white transition duration-200 ${
    startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
  }`}
  onClick={handleBack}
  disabled={startIndex === 0}
>
  <MdArrowBackIosNew className="w-5 h-5" />
</button>
<button
  className={`flex items-center justify-center text-yellow-500 border border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white transition duration-200 ${
    startIndex + reflectionsPerPage >= totalReflections
      ? "opacity-50 cursor-not-allowed"
      : ""
  }`}
  onClick={handleNext}
  disabled={startIndex + reflectionsPerPage >= totalReflections}
>
  <span className="inline-block transform rotate-180">
    <MdArrowBackIosNew className="w-5 h-5" />
  </span>
</button>


            </div>
          </div>

         
          <div className="reflection-right">
            {selectedReflection ? (
              <div className="bg-gray-800 p-6 shadow-lg text-white right-text">
                <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
                  {selectedReflection.title}
                </h2>

                <p
                  className={`text-gray-300 mb-6`}
                  dangerouslySetInnerHTML={{
                    __html: selectedReflection.content,
                  }}
                />
              </div>
            ) : (
              <Lottie
                className="w-64 h-64 md:w-96 md:h-96 right-animation"
                animationData={reflectionanimation}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

