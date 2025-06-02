import React from 'react';
import { motion } from 'framer-motion';
import "../assets/css/skills.css";

function Skills() {
    const frontendSkills = [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 70 },
        { name: 'HTML & CSS', level: 75 },
        { name: 'Tailwind CSS', level: 65 },
    ];

    const backendSkills = [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'RESTful APIs', level: 80 },
        { name: 'SQL', level: 55 }
    ];

    const tools = [
        'Git & GitHub',
        'VS Code',
        'Figma',
        'Webpack',
        'MUI',
        'Docker',
    ];

    const toolItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2, // Delay based on index
                duration: 0.6,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section className="skills--section">
            <motion.div
                className='skills--header--section'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>My Skills</h1>
                <h2>Technical Expertise</h2>
                <h3>Technologies and tools I work with to bring ideas to life</h3>
            </motion.div>

            <motion.div
                className='skills--main--body'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {[frontendSkills, backendSkills].map((group, idx) => (
                    <div key={idx} className='skills--content--section'>
                        {group.map((skill, index) => (
                            <div key={index} className="skill--bar--container">
                                <div className="skill--label">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="skill--progress">
                                    <motion.div
                                        className="skill--progress--fill"
                                        initial={{ width: 0, opacity: 0 }}
                                        whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 * index }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>

            <motion.div
                className='skills--tools'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <br/>
                <h1 className='skills--tools--header'>Tools & Other Skills</h1>
                <div className='skills--tools--section'>
                    {tools.map((tool, index) => (
                        <motion.span
                            key={index}
                            className="skill--tool--badge"
                            variants={toolItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index} // Pass index to variant
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {tool}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}

export default Skills;
