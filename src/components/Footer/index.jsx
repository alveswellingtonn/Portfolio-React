import React from 'react';
import './styles.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return (

        <footer>

            <section className='footer-link'>

                <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="https://api.whatsapp.com/send?phone=5511975526178&text=Ol%C3%A1%20Seja%20Bem%20vindo!" target="_blank" rel='noreferrer'>
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>

                <a href="mailto:alveswellingtonmoraes@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>

                <section className='footer-texto'>
                    <p>&copy; Todos os Direitos Reservados - Wellington Alves</p>
                </section>

            </section>

        </footer>

    );
}

export default Footer;