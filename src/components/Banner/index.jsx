import React from 'react';
import './styles.css';

import avatar5 from "../../assets/img/avatar5.jpg";

function Banner() {

    return (

        <section className='capa'>

            <img src={avatar5} alt="avatar" />

            <p>Front-end Developer</p>

            <section className='social-media'>

                <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>

                <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>

            </section>

        </section>
    );
}

export default Banner;