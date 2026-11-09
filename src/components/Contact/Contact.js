import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

import '../../styles/Contact/Contact.scss';

// GitHub Pages has no backend, so the form opens the visitor's mail client
const sendMail = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:mbasha661@gmail.com?subject=${subject}&body=${body}`;
};
const Contact = () => {

    return (
        <>
            <div className="contact" id='contact'>
                <div className="contact__header">
                    <h1>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="0"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="200"
                            data-aos-offset="200"
                        >
                            O
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="400"
                            data-aos-offset="200"
                        >
                            N
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="600"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="800"
                            data-aos-offset="200"
                        >
                            A
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1000"
                            data-aos-offset="200"
                        >
                            C
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1200"
                            data-aos-offset="200"
                        >
                            T
                        </span>
                        <span
                            data-aos="fade-down"
                            data-aos-delay="1400"
                            data-aos-offset="200"
                        >
                            .
                        </span>
                    </h1>
                </div>
                <div className="contact__container">
                    <div className="contact__details">
                        <div className="contact__form" data-aos="fade-up">
                            <form name="contact" onSubmit={sendMail}>
                                                                <p className="contact__form-group">
                                    <label htmlFor="name">Name: </label>
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Enter name"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="email">Email: </label>
                                    <input
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter email"
                                        required
                                    />
                                </p>
                                <p className="contact__form-group">
                                    <label htmlFor="message">Concern: </label>
                                    <textarea
                                        name="message"
                                        id="contact__message"
                                        cols="20"
                                        rows="5"
                                        placeholder="Type your messsage"
                                    ></textarea>
                                </p>
                                <button type='submit' className="contact__send-btn">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="contact__info" data-aos="fade-up">
                        <h3 className="contact__info-title">Let's Connect</h3>
                        <div className="contact__info-details">
                            <ul>
                                <li> <FontAwesomeIcon icon={faLocationDot} size="2x" /><p><span>Address:&nbsp;&nbsp;</span>Tiruchirappalli, Tamil Nadu, India</p></li>
                                <li> <FontAwesomeIcon icon={faPhone} size="2x" /><p><span>Phone:</span>&nbsp;&nbsp;(+91) 97863 95076</p></li>
                                <li> <FontAwesomeIcon icon={faEnvelope} size="2x" /><p><span>Email:&nbsp;&nbsp;</span>mbasha661@gmail.com</p></li>
                                <li> <FontAwesomeIcon icon={faSquareCheck} size="2x" /><span>OPEN TO WORK</span></li>
                            </ul>
                        </div>
                        <div className="contact__social">
                            <p className="contact__linkedin">
                                <a href="https://www.linkedin.com/in/mahaboob-basha-190ab9135" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                            </p>

                            <p className='contact__github'>
                                <a href="https://github.com/mbasha661" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
