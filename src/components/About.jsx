import React from "react";  
import AboutImage from "../assets/aboutme-image.png";  

const About = () => {  
  return (  
    <div className="bg-black text-white py-20" id="about">  
      <div className="container mx-auto px-8 md:px-16 lg:px-24">  
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>  
        <div className="flex flex-col md:flex-row items-center md:space-x-12">  
          <img  
            src={AboutImage}  
            alt=""  
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"  
          />  
          <div className="flex-1">  
            <p className="text-lg mb-8">  
              Hi! I’m Lemi Damena, a software engineering student at Jimma University specializing in web development.   
              I am passionate about creating dynamic and user-friendly web applications, and I have experience with HTML, CSS, JavaScript, PHP, React, Node.js, etc.  
              I enjoy tackling challenges through coding and am eager to learn and grow in the field.   
              I’m always looking for opportunities to apply my skills in real-world projects, whether through internships or collaborations.  
            </p>  
            <div className="space-y-4">  
              <div className="flex items-center">  
                <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>  
                <div className="grow bg-gray-800 rounded-full h-2.5">  
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>  
                </div>  
              </div>  
              
              <div className="flex items-center">  
                <label htmlFor="javascriptandreact" className="w-2/12">JavaScript & React JS</label>  
                <div className="grow bg-gray-800 rounded-full h-2.5">  
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>  
                </div>  
              </div>  

              <div className="flex items-center">  
                <label htmlFor="phpandmysql" className="w-2/12">PHP & MySQL</label>  
                <div className="grow bg-gray-800 rounded-full h-2.5">  
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>  
                </div>  
              </div>  

              <div className="flex items-center">  
                <label htmlFor="nodeandexpress" className="w-2/12">Node JS & Express</label>  
                <div className="grow bg-gray-800 rounded-full h-2.5">  
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>  
                </div>  
              </div>  
            </div>  
            <div className="mt-12 flex justify-between text-center">  
              <div>  
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">1+</h3>  
                <p>Years Experience</p>  
              </div>  
              <div>  
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">4+</h3>  
                <p>Projects Completed</p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
};  

export default About;