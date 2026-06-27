import React from "react";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { motion } from "framer-motion";
import "../assets/css/project.css";

import novaChat from "../assets/images/novachat.jpg";
import pets from "../assets/images/pets.jpeg";
import clone from "../assets/images/clone.jpeg";

function Project() {
    const projects = [
        {
            title: "NOVA CHAT",
            description: "An AI-powered chat application built with React and Google Gemini AI, enabling users to have intelligent conversations with real-time responses in a modern and responsive interface.",
            tags: ["React", "Google Gemini AI Model"],
            github: "https://github.com/subhalaxmi-srichandan08/AI-CHAT-BOT-NovaChat",
            demo: "https://nova-chat-subbu.netlify.app/",
            image: novaChat
        },
        {
            title: "Paw Point",
            description: "A veterinary appointment booking and pet care management platform that allows pet owners to schedule appointments, manage pet records, and connect with veterinary services seamlessly.",
            tags: ["React", "Clerk", "Node", "Express", "PostgreSQL"],
            github: "https://github.com/subhalaxmi-srichandan08/pet-ecommerce",
            demo: "#",
            image: pets
        },
        {
            title: "Website Clone",
            description: "A pixel-perfect responsive website clone developed using HTML5, CSS3, and JavaScript, replicating the original design and user experience while demonstrating strong frontend development skills.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            github: "https://github.com/subhalaxmi-srichandan08/Gushwork-Assignment",
            demo: "https://website-clone-hdpe.netlify.app/",
            image: clone
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
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
            transition: { type: "spring", stiffness: 200 }
        }
    });

    const tagVariants = {
        hover: { scale: 1.1, transition: { duration: 0.2 } }
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
                    >
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                        </div>

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
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={16} /> Code
                            </motion.a>
                            <motion.a
                                href={project.demo}
                                className="demo-link"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                target={project.demo === "#" ? "_self" : "_blank"}
                                rel="noopener noreferrer"
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