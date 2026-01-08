import './index.scss';
import { useState } from 'react';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faTwitter,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
    faGear,
    faBook,
    faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';


const Sidebar: React.FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false);

    return (
        <div className="nav-bar">
            <Link
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={LogoS} alt="Logo" />
                <img className="sub-logo" src={LogoSubtitle} alt="dhananjaya" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    className={({ isActive }) => isActive ? 'active' : ''}
                    to="/"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    className={({ isActive }) => `about-link ${isActive ? 'active' : ''}`}
                    to="/about"
                    onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    className={({ isActive }) => `Skills-link ${isActive ? 'active' : ''}`}
                    to="/Skills"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faGear} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    className={({ isActive }) => `Projects-link ${isActive ? 'active' : ''}`}
                    to="/Projects"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    className={({ isActive }) => `Experience-link ${isActive ? 'active' : ''}`}
                    to="/Experience"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    className={({ isActive }) => `Education-link ${isActive ? 'active' : ''}`}
                    to="/Education"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
                </NavLink>
                <NavLink
                    className={({ isActive }) => `contact-link ${isActive ? 'active' : ''}`}
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a
                        href="https://www.linkedin.com/in/dhananjaya-yapa-16b14221a/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/IT21185052"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://x.com/YapaD99"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faTwitter}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mr_yapa/">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    );
};

export default Sidebar;
