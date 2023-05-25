import React from 'react';
import './styles.css';

// import avatar from "../../assets/img/avatar5.jpg";
import banner_imc from "../../assets/img/banner_imc.png";
import parallax from "../../assets/img/parallax.png";
import recurso_grafico from "../../assets/img/recurso-grafico.png";

function Portfolio() {

    return (

        <section className='container'>

            <h2 className='portfolio'>
                Projetos
            </h2>

            <section className='portfolio-container'>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={recurso_grafico} alt="teste" />
                    </section>
                    <h3>
                        Aplicativo Caieiras Tour
                    </h3>
                    <section className='btn'>
                        <a href="https://play.google.com/store/apps/details?id=br.com.wellington.caieiras_tour" target="_blank" rel='noreferrer'>App</a>
                        <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={banner_imc} alt="teste" />
                    </section>
                    <h3>
                        Aplicativo IMC
                    </h3>
                    <section className='btn'>
                        <a href="https://play.google.com/store/apps/details?id=br.com.wellington.imc" target="_blank" rel='noreferrer'>App</a>
                        <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={parallax} alt="teste" />
                    </section>
                    <h3>Site efeito parallax js html css</h3>

                    <section className='btn'>
                        <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>
                        <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={parallax} alt="teste" />
                    </section>
                    <h3>Site efeito parallax js html css</h3>

                    <section className='btn'>
                        <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>
                        <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={parallax} alt="teste" />
                    </section>
                    <h3>Site efeito parallax js html css</h3>

                    <section className='btn'>
                        <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>
                        <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={parallax} alt="teste" />
                    </section>
                    <h3>Site efeito parallax js html css</h3>

                    <section className='btn'>
                        <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>
                        <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

            </section>

        </section>
    );
}

export default Portfolio;