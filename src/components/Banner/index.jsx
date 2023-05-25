import React from 'react';
import './styles.css';

import avatar5 from "../../assets/img/avatar5.jpg";

function Banner() {

    return (

        <section className='capa'>

            <section className='social-media'>

                <h1>Wellington Alves</h1>

                <p>Desenvolvedor Front-end & Mobile</p>

                <section className='social-button'>
                    <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>

                    <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                </section>
                
            </section>

            <section className='avatar'>
                <img src={avatar5} alt="avatar" />
            </section>

        </section>
    );
}

export default Banner;