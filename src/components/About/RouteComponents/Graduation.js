import React from 'react'


import '../../../styles/About/Route/Graduation.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Graduation = () => {
    return (
        <>
            <div className="graduation">
                <div className="graduation__container">
                    <div className="graduation__header">
                        <h2 className="graduation__number">0<span>4</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">E<span>ngineering</span>.</h1>
                    </div>

                    <div className="graduation__description">
                        <h1>AR College of Engineering and Technology, Anna University</h1>
                        <h2><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp;&nbsp;Graduated 2020</h2>
                        <p>B.E. in Mechanical Engineering, graduated in 2020 with a CGPA of 7.49. Also holds a Diploma in Mechanical Engineering from MIET Polytechnic College, Trichy (2016, 76%).</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Graduation
