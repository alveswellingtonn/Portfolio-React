import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

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
            <section className='contato'>

                <section className='email'>
                    <h2>E-mail</h2>
                    <p>alveswellingtonmoraes@hotmail.com</p>
                </section>

                <section class="telefone">
                    <h2>Telefone</h2>
                    <p> Celular: (11) 97552-6178 </p>
                </section>

            </section>

            <section className='formulario-contato'>

                <form className='formulario' ref={form} onSubmit={sendEmail}>

                    <label>Nome:</label>
                    <input type="text" placeholder="ex: José da Silva"></input>

                    <label>Email:</label>
                    <input type="email" placeholder="ex: jose@gmail.com"></input>

                    <label>Telefone:</label>
                    <input type="tel" placeholder="ex: (99) 99999-9999"></input>

                    <label>Mensagem:</label>
                    <textarea></textarea>

                    <button type="submit" value="Enviar">Enviar</button>

                </form>
            </section>
        </React.Fragment>

    )
}

export default Contact