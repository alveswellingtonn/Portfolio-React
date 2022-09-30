import React from 'react';
import './styles.css';

import avatar5 from "../../assets/img/avatar5.jpg"

function Banner() {

    return (
        <React.Fragment>

        {/* inicio do banner*/}
        <section className='capa'>

            <img src={avatar5} alt="avatar" />

            <p>Front-end Developer</p>

            <section className='social-media'>

                <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>Linkedin</a>

                <a href="https://www.linkedin.com/in/wellington-alves-de-moraes-117969106/" target="_blank" rel='noreferrer'>GitHub</a>

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

            <section className='container'>

                <section className='portfolio'>
                    <h2>
                        <p>Projetos</p>
                    </h2>
                </section>

                <section className='card-container'>
                    <section className='card'>
                        <section className='card-wrapper'>
                            <h2>Parallax</h2>
                            <p>Veja meu projeto</p>
                        </section>
                    </section>
                    <section className='card-text'>
                        Este site foi criado com um efeito de parallax que ocorre alternancias entre as camadas de imagens que 
                        deixa a impressão de movimento, onde ao passar a página o texto na tela cobre uma imagem e 
                        em seguida exibi outra imagem.
                        <br/>
                        <p className='ver-projeto'>
                            <a href="https://play.google.com/store/apps/details?id=br.com.wellington.caieiras_tour" target="_blank" rel='noreferrer'>
                                Conheça meu projeto
                            </a>
                        </p>
                    </section>
                </section>

                <section className='card-container-segundo'>

                    <section className='card-text-segundo'>
                        No guia Caieiras Tour você vai encontrar informações sobre diversas atrações turísticas,
                        restaurantes, hospitais e ubs entre muitas outras informações.
                        <br/><br/>
                        O aplicativo foi desenvolvido 
                        com o objetivo de ajudar as pessoas que visitam a cidade.
                        <br/>
                        <p className='ver-projeto'>
                            <a href="https://play.google.com/store/apps/details?id=br.com.wellington.caieiras_tour" target="_blank" rel='noreferrer'>
                                Conheça meu projeto
                            </a>
                        </p>
                    </section>

                    <section className='card-segundo'>
                        <section className='card-wrapper-segundo'>
                            <h2>Caieiras Tour</h2>
                            <p>Veja meu projeto</p>
                        </section>
                    </section>

                </section>

                <section className='card-container-terceiro'>
                    <section className='card-terceiro'>
                        <section className='card-wrapper-terceiro'>
                            <h2>IMC</h2>
                            <p>Veja meu projeto</p>
                        </section>
                    </section>

                    <section className='card-text-terceiro'>
                        Com este aplicativo você pode calcular seu imc e salvar suas informações para monitorar os 
                        seus resultados. Estar acima do peso ou ser obeso pode aumentar o risco de doenças 
                        relacionadas à obesidade tais como: hipertensão, doenças cardíacas e diabetes.
                        <br/><br/>
                        Descubra o seu peso ideal e tente alcançá-lo com atividades físicas ganhando 
                        mais saúde e evitando assim as doenças relacionadas à obesidades.
                        <br/>
                        <p className='ver-projeto'>
                            <a href="https://play.google.com/store/apps/details?id=br.com.wellington.imc" target="_blank" rel='noreferrer'>
                               Conheça meu projeto
                            </a>
                        </p>
                    </section>
                </section>

            </section>

        </main>
        {/* fim do conteudo da pagina*/}

        </React.Fragment>
    );
}

export default Banner;