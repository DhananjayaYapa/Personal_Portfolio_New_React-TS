import { useEffect, useState, useRef, type FormEvent } from 'react';
import Loader from 'react-loaders';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact: React.FC = () => {
    const [letterClass, setLetterClass] = useState<string>('text-animate');
    const form = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_5vrjqz8', 'template_l2huoij', form.current, 'l2H5G8Db1nssS0Axb')
                .then(
                    () => {
                        alert('Message successfully sent!');
                        window.location.reload();
                    },
                    () => {
                        alert('Failed to send the message, please try again');
                    }
                );
        }
    };

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in Associate Software Engineer, Software Engineer, Frontend Developer, Backend Developer, AI/ML Engineer opportunities - especially on ambitious
                        or collaborating with cross-functional teams to deliver cutting-edge products.. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Dhananjaya Yapa,
                    <br />
                    Weliwita,
                    <br />
                    Kaduwela, <br />
                    Colombo.<br />
                    <br />
                    <span>dhananjayayapa99@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[6.9335, 79.9780]} zoom={13}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={[6.9335, 79.9780]}>
                            <Popup>Dhananjaya lives here, contact and let's talk!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" active={true} />
        </>
    );
};

export default Contact;
