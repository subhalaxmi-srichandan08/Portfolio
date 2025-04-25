import React from "react";
import Typewriter from "typewriter-effect";
import Lottie from "lottie-react";
import developerAnimation from "../assets/animation.json";
import "../assets/css/home.css";
import { motion } from "framer-motion";
import { IoMdDownload } from "react-icons/io";

function Home() {

  const openPDF = () => {
    const pdfUrl = "https://drive.google.com/file/d/1e2B8lAuLyBZsLQXnFTxrNfRuZ--QUce0/view?usp=drive_link";
    window.open(pdfUrl, "_blank");
  };
  
  
  return (
    <div className="home--page--main--section">
      {/* Left Section - Intro */}
      <div className="home--page--sub--section--intro">
        <div className="home--page--title">MERN STACK DEVELOPER</div>
        <h1 className="home--page--title--intro">
          Hi, I'm <span className="highlight">Subhalaxmi Srichandan</span> 👋
        </h1>
        <div className="home--page--intro--explanation">
          <p>Transforming Ideas into Scalable Web Solutions with MERN Stack</p>
        </div>

        {/* Typing Animation */}
        <div className="home--page--typing">
          <h2>
            <Typewriter
              options={{
                strings: [
                  "I build responsive web apps",
                  "I craft seamless user experiences",
                  "I develop scalable backend solutions",
                  "I turn ideas into reality with code",
                  "I optimize performance and security",
                  "I create modern and interactive UIs",
                  "I bring designs to life with React.js",
                  "I architect robust APIs with Node.js",
                  "I work with MongoDB, Express, React & Node",
                  "I solve real-world problems with technology",
                  "I love writing clean and efficient code",
                  "I innovate with the power of MERN Stack",
                  "I develop full-stack applications from scratch"
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h2>
        </div>

        <div className="buuton--resume--dowmload">
          <motion.button
          onClick={openPDF}
            className="button--resume--icon animated--resume--button"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px rgba(74, 108, 247, 0.7)",
              rotate: [0, -3, 3, 0],
            }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            animate={{ scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2 } }}
          >
            <IoMdDownload size={20} />
            
            Resume
          </motion.button>
        </div>


        {/* Buttons */}
        <div className="home--page--button--section">
          <button className="home--page--buttons"onClick={() => window.open("https://www.linkedin.com/in/subhalaxmi-srichandan-2451a22ba/", "_blank")}> Get In Touch</button>
          <button className="home--page--buttons"onClick={() => window.open("https://github.com/subhalaxmi-srichandan08", "_blank")}>See my work</button>
        </div>
      </div>
      
      {/* Right Section - Profile Picture & Animation */}
      <div className="home--page--sub--section--profilepicture">
        <Lottie animationData={developerAnimation} loop={true} />
      </div>
    </div>
  );
}

export default Home;
