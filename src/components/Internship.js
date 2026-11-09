import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Internship = (props) => {
    const points = [
        props.details.keyPointOne,
        props.details.keyPointTwo,
        props.details.keyPointThree,
        props.details.keyPointFour,
    ].filter((point) => point && point.trim() !== '');

    return (
        <>
            <div className="internships__box">
                <h2><p>{props.details.companyName}</p><p>{props.details.role}</p></h2>
                <h3><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp; &nbsp;{props.details.duration}</h3>
                <ul>
                    <p>{props.details.introText}</p>
                    {points.map((point, index) => (
                        <li key={index} data-aos='fade-right' data-aos-delay={200 * (index + 1)} data-aos-offset={props.details.offsetValue}>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Internship
