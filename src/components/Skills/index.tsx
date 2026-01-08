import { useEffect, useState, type ReactNode } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FaPhp, FaHtml5, FaCss3Alt, FaJava, FaNodeJs, FaReact, FaBrain, FaDocker, FaAws, FaRobot } from 'react-icons/fa';
import { RiJavascriptFill } from "react-icons/ri";
import { SiRedux, SiNextdotjs, SiMui } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { TbFileTypeSql } from "react-icons/tb";

interface Skill {
    logo: ReactNode;
    level: string;
    count: number;
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        {
            logo: <FaHtml5 />,
            level: "Html",
            count: 0,
        },
        {
            logo: <FaCss3Alt />,
            level: "CSS",
            count: 0,
        },
        {
            logo: <RiJavascriptFill />,
            level: "JavaScript",
            count: 0,
        },
        {
            logo: <FaJava />,
            level: "Java",
            count: 0,
        },
        {
            logo: <SiRedux />,
            level: "Redux",
            count: 0,
        },
        {
            logo: <FaNodeJs />,
            level: "NodeJS",
            count: 0,
        },
        {
            logo: <FaReact />,
            level: "React",
            count: 0,
        },
        {
            logo: <SiNextdotjs />,
            level: "Next.js",
            count: 0,
        },
        {
            logo: <SiMui />,
            level: "MUI",
            count: 0,
        },
        {
            logo: <FaPhp />,
            level: "Php",
            count: 0,
        },
        {
            logo: <DiMongodb />,
            level: "MongoDB",
            count: 0,
        },
        {
            logo: <TbFileTypeSql />,
            level: "SQL",
            count: 0,
        },
        {
            logo: <FaDocker />,
            level: "Docker",
            count: 0,
        },
        {
            logo: <FaBrain />,
            level: "Machine Learning",
            count: 0,
        },
        {
            logo: <FaRobot />,
            level: "AI Integration",
            count: 0,
        },
        {
            logo: <FaAws />,
            level: "AWS",
            count: 0,
        },
    ];

    const [letterClass, setLetterClass] = useState<string>('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className="container skills-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Experience in Frontend and Backend coding including technologies like
                        <span className="highlight"> Java, JavaScript, Redux, Html, CSS, Tailwind CSS, Next.js, Docker, MUI,
                            Springboot, ReactJS, NodeJS, ExpressJS, Mern-Satck.</span>
                    </p>
                    <p>
                        As well as experienced in SQL and NoSQL Databases including <span className="highlight">MongoDB
                            and MySQL.</span>  Additionally experienced in tools & Technologies like <span className="highlight">Figma, AI Development,
                                AWS, Machine Learning.</span>
                    </p>
                    <p>
                        Visit my <a href="https://www.linkedin.com/in/dhananjaya-yapa-16b14221a/" className="linkedin-link" target="_blank" rel="noopener noreferrer"> LinkedIn </a>profile for more details.
                    </p>
                </div>
                <div className="skill-container">

                    {skills?.map((skill, i) => (
                        <div key={i} className="skill-card">
                            <div
                                style={{
                                    '--skill-count': `${skill.count}%`,
                                } as React.CSSProperties}
                                className="skill-progress"
                            >
                                <div className="skill-logo">
                                    {skill.logo}
                                </div>
                            </div>
                            <p className="skill-level">{skill.level}</p>
                        </div>
                    ))}
                </div>


            </div>
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Skills;
