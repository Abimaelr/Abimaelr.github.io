import React from 'react';
import './style.css';
import Card from '../Card';

function Body() {
    return (
        <div id="body">
            <div className="content">
                <section>
                    <a href="#about"><h3>SOBRE</h3></a>
                    <hr />
                    <p>Sempre fui um grande entusiasta da tecnologia. Desde cedo, saber como um software funcionava para mim era um grande mistério. Então no ensino médio, me tornei um técnico em eletrônica e através disso, participei de várias competições de Robótica, onde tive um contato gigante com programação. Desde então, procurei aprimorar meus conhecimentos, e hoje sou Desenvolvedor Web, e meu lema é Sempre aprenda algo novo!</p>
                </section>
                <section>
                    <a href="#skills"><h3>HABILIDADES</h3></a>
                    <hr />
                    <div className="skillGroup">
                        <div className="skills">
                            <h4>Front-End</h4>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>SASS</li>
                                <li>Bootstrap</li>
                                <li>React.Js</li>
                                <li>ContextAPI</li>
                                <li>React Hooks</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>Jest</li>
                                <li>RTL</li>
                            </ul>
                        </div>
                        <div className="skills">
                            <h4>Back-End</h4>
                            <ul>
                                <li>Node.Js</li>
                                <li>SQL</li>
                                <li>MongoDb</li>
                                <li>Express.Js</li>
                                <li>Mocha</li>
                                <li>Shai</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <a href="#projects"><h3>PROJETOS</h3></a>

                </section>
                <section>
                    <a href="#Formation"><h3>FORMAÇÃO</h3></a>
                    <Card />


                </section>
            </div>
        </div>
    )
}

export default Body
