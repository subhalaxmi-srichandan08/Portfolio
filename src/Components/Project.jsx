import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import "../assets/css/project.css";
import coming_soon from "../assets/images/coming-soon2.jpg"

function Project() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A fully responsive e-commerce platform built with React and Node.js, featuring product listings, cart functionality, and secure checkout.",
            tags: ["React", "Node.js", "Express", "MongoDB"],
            github: "#",
            demo: "#",
        },
        {
            title: "Task Management App",
            description: "A productivity app for managing tasks and projects with drag-and-drop functionality, notifications, and team collaboration features.",
            tags: ["React", "Redux", "Firebase"],
            github: "#",
            demo: "#",
        },
        {
            title: "Weather Dashboard",
            description: "A real-time weather application with interactive maps, forecasts, and location-based services using multiple weather APIs.",
            tags: ["React", "OpenWeather API", "Mapbox", "CSS3"],
            github: "#",
            demo: "#",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const projectVariants = (index) => ({
        hidden: { y: 40, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.175, 0.885, 0.32, 1.275]
            }
        },
        hover: {
            y: -8,
            boxShadow: "0 20px 35px rgba(0,0,0,0.12)",
            transition: {
                type: "spring",
                stiffness: 200
            }
        }
    });

    const tagVariants = {
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    return (
        <section className="project--main--section">
            <motion.div 
                className="project--header-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="project--header">My Projects</h2>
                <p className="project--welcome--line">
                    Explore some of my recent work showcasing my skills and expertise.
                </p>
            </motion.div>

            <motion.div 
                className="project--body"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project, index) => (
                    <motion.div 
                        className="project--section--intro"
                        key={index}
                        variants={projectVariants(index)}
                        whileHover="hover"
                        style={{ opacity: 1 }}
                    >
                        <img 
                            src={coming_soon} 
                            alt={project.title} 
                            className="project-image" 
                        />

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project--section--tags">
                                {project.tags.map((tag, i) => (
                                    <motion.span 
                                        className="project--tags" 
                                        key={i}
                                        variants={tagVariants}
                                        whileHover="hover"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        <div className="project-links">
                            <motion.a 
                                href={project.github} 
                                className="code-link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Github size={16} /> Code
                            </motion.a>
                            <motion.a 
                                href={project.demo} 
                                className="demo-link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink size={16} /> Demo
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Project;