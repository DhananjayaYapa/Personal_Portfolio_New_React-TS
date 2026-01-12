import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import AnimatedLetters from "../AnimatedLetters";
import project1 from "../../assets/images/project-1.png";
import project2 from "../../assets/images/project-2.png";
import project3 from "../../assets/images/project-3.png";
import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
import project6 from "../../assets/images/project-6.png";
import project7 from "../../assets/images/project-7.jfif";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";

interface Project {
  img: string;
  name: string;
  description: string;
  github_link: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      img: project4,
      name: "E-Voting System",
      description:
        "#BlockChain #ComputerVision #Sentiment-Analysis #MachineLearning",
      github_link:
        "https://github.com/malithJayasinghe2000/E-voting-research-project",
    },
    {
      img: project5,
      name: "HRM System",
      description:
        "#ReactJS #Redux #Material-UI #TypeScript",
      github_link:
        "https://github.com/DhananjayaYapa/Hera_React-TS_WebApp-Olympus-",
    },
    {
      img: project6,
      name: "Admin Portal HRM System",
      description:
        "#ReactJS #Redux #Material-UI #TypeScript",
      github_link:
        "https://github.com/DhananjayaYapa/Admin_React-Redux-TS_WebApp-Olympus",
    },
    {
      img: project7,
      name: "Tea Supply Chain Management System",
      description:
        "#NextJS #Redux #Material-UI #TypeScript",
      github_link:
        "https://github.com/DhananjayaYapa/BrewOne-NextJS-TS_WebApp",
    },
    {
      img: project1,
      name: "Learning Management System",
      description: "#Mern-stack #Docker #Stripe",
      github_link: "https://github.com/MohammedShabry/LMS-DS",
    },
    {
      img: project2,
      name: "Flight Booking System",
      description: "#Java-Servelets #MySQL",
      github_link:
        "https://github.com/IT21185052/Flight_Management_System-Java_Servlet-MySQL",
    },
    {
      img: project3,
      name: "Uni Management Restful API",
      description: "#NodeJS #JWT #Postman",
      github_link:
        "https://github.com/IT21185052/University-Management-Restful-API-Backend-Node.js",
    },
  ];
  const [letterClass, setLetterClass] = useState<string>("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container projects-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
              idx={15}
            />
          </h1>
          <p>
            As a dedicated Associate Software Engineer, I have embarked on
            numerous projects that demonstrate my technical prowess and
            creativity in solving real-world problems. My work spans across
            various technologies, including frontend and backend development,
            where I have built dynamic, responsive web applications, implemented
            complex algorithms, and crafted user-friendly interfaces.
          </p>
          <p>
            Each project reflects my commitment to excellence, attention to
            detail, and passion for continuous learning. Whether it's developing
            interactive applications, optimizing performance, or integrating
            innovative features, I strive to deliver solutions that not only
            meet but exceed expectations. Dive into my portfolio to explore my
            major projects that highlight my journey, skills, and contributions
            to the field of software development.
          </p>
        </div>
        <div className="slide-container">
          <motion.div
            className="swiper-container"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
              }}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
            >
              {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="project-card">
                    <div className="image-container">
                      <img
                        src={project_info.img}
                        alt={project_info.name}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 >{project_info.name}</h3>
                    <div className="links">
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                      >
                        Github Link
                      </a>
                      <span className="text-green-400">
                        {project_info.description}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Projects;
