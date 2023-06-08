import React from 'react';
import './styles.css';

// import avatar from "../../assets/img/avatar5.jpg";
import banner_imc from "../../assets/img/banner_imc.png";
import parallax from "../../assets/img/parallax.png";
import recurso_grafico from "../../assets/img/recurso-grafico.png";
import gym from "../../assets/img/gym_react.png";
import calc_imc from "../../assets/img/calculadora_imc.png";
import cronometro from "../../assets/img/cronometro.png";
import num_aleatorio from "../../assets/img/numero_aleatorio.png";
import relogio from "../../assets/img/relogio.png";
import todo_list from "../../assets/img/todo_list.png";

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
                        <a href="https://github.com/alveswellingtonn/guia_turistico" target="_blank" rel='noreferrer'>GitHub</a>
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
                        <a href="https://github.com/alveswellingtonn/calculadora_imc" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={gym} alt="teste" />
                    </section>
                    <h3>Website para academia</h3>

                    <section className='btn'>
                        <a href="https://gymreactt.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/Gym-React" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={parallax} alt="teste" />
                    </section>
                    <h3>Website com efeito parallax</h3>

                    <section className='btn'>
                        <a href="https://jsparallax.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/Parallax-Js" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={calc_imc} alt="teste" />
                    </section>
                    <h3>Website cálculo de imc</h3>

                    <section className='btn'>
                        <a href="https://jscalculadoraimc.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/Calculadora-IMC" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={cronometro} alt="teste" />
                    </section>
                    <h3>Website Cronômetro</h3>

                    <section className='btn'>
                        <a href="https://jscronometro.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/cronometro-js" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={todo_list} alt="teste" />
                    </section>
                    <h3>Website Todo List</h3>

                    <section className='btn'>
                        <a href="https://todojslist.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/Todo-List" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={num_aleatorio} alt="teste" />
                    </section>
                    <h3>Gerador número aleatório</h3>

                    <section className='btn'>
                        <a href="https://geradoraleatoriodoisnumero.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/Gerador-de-n-meros-aleat-rios-entre-dois-n-meros" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

                <article className='portfolio-item'>
                    <section className='portfolio-image'>
                        <img src={relogio} alt="teste" />
                    </section>
                    <h3>Relógio digital</h3>

                    <section className='btn'>
                        <a href="https://jsrelogiodigital.netlify.app/" target="_blank" rel='noreferrer'>Site</a>
                        <a href="https://github.com/alveswellingtonn/relogio-digital" target="_blank" rel='noreferrer'>GitHub</a>
                    </section>
                </article>

            </section>

        </section>
    );
}

export default Portfolio;