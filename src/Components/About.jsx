import React from 'react'
import "../assets/css/about.css"
import subbie from "../assets/images/profilepicturess.PNG"

function About() {
    return (
        <div className='about--section--main--div'>
            {/* Profile Picture or Animation */}
            <div className='about--section--picture--section'>
                {/* Subiee :)  */}
                <img src={subbie} alt="Subhalaxmi Srichandan" />
                {/* OR */}
                {/* <Lottie animationData={developerAnimation} loop={true} /> */}
            </div>

            {/* About Content */}
            <div className='about--section--template'>
                <h2 className='about--section--title'>About Me</h2>
                <p>
                    I'm a MERN Stack Developer with expertise in JavaScript, MongoDB, Express.js, React.js, and Node.js.
                    I love building scalable, high-performance web applications that provide seamless user experiences.
                    With a passion for **clean code, UI/UX, and backend architecture, I strive to create modern solutions for real-world problems.
                </p>

                {/* Highlights */}
                <div className='about--page--highlights'>
                    <h3> What I Do</h3>  {/* :) nothing */}
                    <ul>
                        <li>Full-Stack Development with MERN</li>
                        <li>Passionate about UI/UX & Backend Architecture</li>
                        <li>Experienced in MongoDB, Express.js, React.js, Node.js</li>
                        <li>REST APIs, Authentication & Security</li>
                        <li>Optimized Performance & Scalable Architecture</li>
                        <li>Cloud Deployment & DevOps (AWS, Vercel, Netlify)</li>
                    </ul>
                </div>
            </div>l
        </div>
    )
}

export default About