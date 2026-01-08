import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCircle } from 'react-icons/fa';
import './index.scss';

interface Role {
    title: string;
    period: string;
    highlightLabel?: string;
    highlight?: string;
    description: string;
}

interface ExperienceItem {
    logo: string | null;
    company: string;
    roles: Role[];
}

const Experience: React.FC = () => {
    const [letterClass, setLetterClass] = useState<string>('text-animate');

    const experiences: ExperienceItem[] = [
        {
            logo: null,
            company: 'Acentura Inc',
            roles: [
                {
                    title: 'Associate Software Engineer',
                    period: 'Jan 2024 - Present',
                    highlightLabel: 'Focus:',
                    highlight: 'Full-Stack Development, AI/ML, Cloud Solutions',
                    description: 'Working as an Associate Software Engineer, developing full-stack applications using modern technologies. Involved in AI/ML development, building scalable solutions, and collaborating with cross-functional teams.'
                },
                {
                    title: 'Software Engineering Trainee',
                    period: 'Jul 2023 - Dec 2023',
                    highlightLabel: 'Skills:',
                    highlight: 'React, Node.js, MongoDB, Agile',
                    description: 'Completed internship focusing on full-stack development, learning industry best practices, agile methodologies, and contributing to real-world projects.'
                }
            ]
        },
        {
            logo: null,
            company: 'Active Digital Labs',
            roles: [
                {
                    title: 'Software Engineering Intern',
                    period: 'Jul 2023 - Dec 2023',
                    highlightLabel: 'Skills:',
                    highlight: 'React, Node.js, MongoDB, Agile',
                    description: 'Completed internship focusing on full-stack development, learning industry best practices, agile methodologies, and contributing to real-world projects.'
                }
            ]
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container experience-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Throughout my career, I have gained valuable experience working with
                        cutting-edge technologies and collaborating with talented teams to
                        deliver impactful solutions. Explore my professional journey below.
                    </p>
                </div>
                <div className="experience-cards">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="experience-card"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2 * index,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.8 },
                                ease: 'easeIn',
                            }}
                        >
                            <div className="card-header-company">
                                <div className="card-logo">
                                    <FaBriefcase />
                                </div>
                                <h3 className="company-name-main">{exp.company}</h3>
                            </div>

                            <div className="roles-container">
                                {exp.roles.map((role, roleIndex) => (
                                    <div key={roleIndex} className="role-item">
                                        <div className="timeline-connector">
                                            <div className="timeline-dot"><FaCircle size={8} /></div>
                                            {roleIndex !== exp.roles.length - 1 && <div className="timeline-line"></div>}
                                        </div>
                                        <div className="role-content">
                                            <div className="role-header">
                                                <h4 className="role-title">{role.title}</h4>
                                                <span className="period">{role.period}</span>
                                            </div>

                                            {role.highlight && (
                                                <div className="card-highlight">
                                                    <span className="highlight-label">{role.highlightLabel}</span>
                                                    <span className="highlight-value">{role.highlight}</span>
                                                </div>
                                            )}

                                            <p className="card-description">{role.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Experience;
