import React from 'react';
import './styles.css';

import avatar5 from "../../assets/img/avatar5.jpg";
import Portfolio from '../Portfolio';

function Banner() {

    return (
        <React.Fragment>

        {/* inicio do banner*/}
        <section className='capa'>

            <img src={avatar5} alt="avatar" />

            <p>Front-end Developer</p>

            <section className='social-media'>

                <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>

                <a href="https://github.com/alveswellingtonn" target="_blank" rel='noreferrer'>GitHub</a>

            </section>

        </section>
        {/* fim do banner*/}
        
        {/* inicio do conteudo da pagina*/}
        <main>

            <section className='sobre-mim'>

                <h2>Sobre mim</h2>

                <p>
                    Olá, me chamo Wellington Alves de Moraes sou bacharelado em Ciência da Computação especializado
                    em desenvolvimento web. Foi realizado o TCC (trabalho conclusão de curso), onde ocorreu o 
                    desenvolvimento de um sistema de automação residencial utilizando arduino. Atuei também
                    no desenvolvimento de um site com as tecnologias BOOTSTRAP, HTML5 e CSS3, também
                    realizei o desenvolvimento e a publicação de dois aplicativos: "Caieiras Tour" e "IMC - índice de massa corporal"
                    com Flutter.
                </p>

            </section>

            <Portfolio />

        </main>
        {/* fim do conteudo da pagina*/}

        </React.Fragment>
    );
}

export default Banner;