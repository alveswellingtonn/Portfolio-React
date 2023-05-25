import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import './styles.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lhpwzro', 'template_i07y91s', form.current, 'A_28qZFkVxz0M6x1P')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <React.Fragment>
            <section className='title-contato'>
                <h2>Contato</h2>
            </section>

            <section className='contato'>

                <article className='email'>
                    <a className='icon' href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <h2>E-mail</h2>
                    <p>alveswellingtonmoraes@hotmail.com</p>

                    <a className='send-mensagem' href="mailto:alveswellingtonmoraes@hotmail.com">
                        Envie uma mensagem
                    </a>
                </article>

                <article class="telefone">
                    <a className='icon' href="https://api.whatsapp.com/send?phone=5511975526178&text=Ol%C3%A1%20Seja%20Bem%20vindo!" target="_blank" rel='noreferrer'>
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <h2>Celular</h2>
                    <p> (11) 97552-6178 </p>

                    <a className='send-mensagem' href="https://api.whatsapp.com/send?phone=5511975526178&text=Ol%C3%A1%20Seja%20Bem%20vindo!" target="_blank" rel='noreferrer'>
                        Envie uma mensagem
                    </a>
                </article>

            </section>

            <section className='formulario-contato'>

                <form className='formulario' ref={form} onSubmit={sendEmail}>

                    {/* <label>Nome:</label> */}
                    <input type="text" name='name' placeholder="Nome Completo"></input>

                    {/* <label>Email:</label> */}
                    <input type="email" name='email' placeholder="Seu E-mail"></input>

                    {/* <label>Telefone:</label> */}
                    <input type="tel" name='telefone' placeholder="Seu Telefone"></input>

                    {/* <label>Mensagem:</label> */}
                    <textarea name='message' placeholder='Sua Mensagem'></textarea>

                    <button type="submit" value="Enviar">Enviar Mensagem</button>

                </form>
            </section>
        </React.Fragment>

    )
}

export default Contact