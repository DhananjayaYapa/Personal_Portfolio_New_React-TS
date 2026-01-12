import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import logo from "../../assets/images/2.png";
import logo2 from "../../assets/images/1.png";
import logo3 from "../../assets/images/4.png";
import './index.scss';

interface EducationItem {
    logo: string;
    icon: React.ReactNode;
    institution: string;
    degree: string;
    period: string;
    highlightLabel: string;
    highlight: string;
    description: string;
}

const Education: React.FC = () => {
    const [letterClass, setLetterClass] = useState<string>('text-animate');

    const educations: EducationItem[] = [
        {
            logo: logo,
            icon: <FaUniversity />,
            institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
            degree: 'BSc (Hons) in Information Technology Specializing in Software Engineering',
            period: '2021 - 2025',
            highlightLabel: 'Grade:',
            highlight: '3.15 CGPA',
            description: 'Recently Graduated with Bachelor of Science (Hons) in Information Technology specializing in Software Engineering with strong emphasis on software development, full-stack application design, AI development, and modern engineering practices. Gained practical experience in building web applications, collaborating in teams, and applying problem-solving skills to real-world projects.',
        },
        {
            logo: logo3,
            icon: <FaGraduationCap />,
            institution: 'Esoft Metro Campus',
            degree: 'Diploma in English',
            period: '2019 - 2020',
            highlightLabel: 'Grade:',
            highlight: 'A Grade',
            description: 'Completed Diploma in English with distinction at Esoft Metro Campus Kurunegala. Enhanced communication skills and professional English proficiency.',
        },
        {
            logo: logo2,
            icon: <FaSchool />,
            institution: "St. Anne's College, Kurunegala",
            degree: 'G.C.E Advanced Level - Physical Science Stream',
            period: '',
            highlightLabel: 'Grade:',
            highlight: 'Combined Maths - C , Physics - C , ICT - C',
            description: 'Passed General Certificate Advanced Level Examination in Physical Science stream. Developed strong analytical and mathematical skills that form the foundation for engineering studies.',
        },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container education-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I have built a solid educational foundation that underpins my expertise
                        as a Software Engineer. Explore this section to learn more about my
                        educational background and achievements.
                    </p>
                </div>
                <div className="education-cards">
                    {educations.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="education-card"
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.2 * index,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 0.8 },
                                ease: 'easeIn',
                            }}
                        >
                            <div className="card-header">
                                <div className="card-logo">
                                    <img src={edu.logo} alt={edu.institution} />
                                </div>
                                <div className="card-info">
                                    <h3 className="institution-name">{edu.institution}</h3>
                                    <p className="degree-name">{edu.degree}</p>
                                    <span className="period">{edu.period}</span>
                                </div>
                            </div>
                            <div className="card-highlight">
                                <span className="highlight-label">{edu.highlightLabel}</span>
                                <span className="highlight-value">{edu.highlight}</span>
                            </div>
                            <p className="card-description">{edu.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Education;
