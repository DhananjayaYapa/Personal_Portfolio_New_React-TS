import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';
import logo5 from '../../assets/images/5.png'
import logo6 from '../../assets/images/6.png';
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
            logo: logo6,
            company: 'Acentura Inc',
            roles: [
                {
                    title: 'Associate Software Engineer',
                    period: 'December 2025 - Present',
                    highlight: 'Skills:    NextJS, NodeJS, ExpressJS, MySQL, AWS, Docker, CI/CD, DevOps',
                    description: 'Associate Software Engineer with practical experience in full-stack application development. Specialized in backend development using Node.js, Express.js, and MySQL, with strong skills in API design, error handling, and database management. Experienced in building RESTful APIs and microservices with clean, maintainable architecture. Proficient in front-end development using Next.js to create responsive user interfaces. Familiar with Git version control, Agile (Scrum) practices, and CI/CD pipelines. Exposure to cloud platforms, Docker, and modern DevOps workflows for scalable deployments.'

                },
                {
                    title: 'Software Engineering Trainee',
                    period: 'June 2025 - December 2025',
                    highlight: 'Skills:    ReactJS, Redux-Toolkit, ReduxSaga, TypeScript, Material-UI, Bitbucket, AWS-Amplify, Frontend with AI',
                    description: 'Software Engineer Trainee with hands-on experience in modern front-end development and microfrontend architecture. Skilled in building scalable user interfaces using TypeScript, React, and Material UI. Experienced in managing global application state with Redux Toolkit for predictable and maintainable data flow. Familiar with Bitbucket version control and collaborative development workflows. Exposure to deploying and hosting front-end applications using AWS Amplify.'
                }
            ]
        },
        {
            logo: logo5,
            company: 'Active Digital Labs',
            roles: [
                {
                    title: 'Software Engineering Intern',
                    period: 'October 2024 - June 2025',
                    highlight: 'Skills:    ReactJS, Tailwind-CSS, HTML, CSS, Laravel, PHP, MySQL, Apache, ORM, Trello, Git',
                    description: 'Software Engineer Intern with hands-on experience in backend development using the PHP-based Laravel framework. Worked with MySQL databases, including writing optimized SQL queries and managing relational data. Gained experience in full-stack development by building front-end features using React. Actively used Trello for task tracking and project coordination. Developed strong collaboration and communication skills while working effectively in a remote development environment.'
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
                        Throughout my professional journey, I have continuously grown by taking on diverse responsibilities and adapting to evolving project requirements. I have worked closely with cross-functional teams to deliver reliable, high-quality solutions in fast-paced environments. These experiences have strengthened my problem-solving mindset, communication skills, and attention to detail. Below is an overview of the roles and contributions that have shaped my development as a software engineer.

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
                                    {exp.logo && <img src={exp.logo} alt={exp.company} />}
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
