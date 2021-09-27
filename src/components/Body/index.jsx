import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Fade, Zoom } from 'react-reveal';
import './style.css';
import Card from '../Card';

import pixel from '../../assets/img/pixel.png'
import api from  '../../assets/img/api.png'
import todo from  '../../assets/img/todo.png'
import uab from  '../../assets/img/uab.png'
import prime from  '../../assets/img/primeIT.png'
import recipes from  '../../assets/img/recipes.png'

function Body() {
    return (
        <div id="body">
                <Container>
                    <div className="content">
                        <Row>
                            <section>
                                <a href="#about"><h3>SOBRE</h3></a>
                                <p>Sempre fui um grande entusiasta da tecnologia. Desde cedo, saber como um software funcionava para mim era um grande mistério. Então no ensino médio, me tornei um técnico em eletrônica e através disso, participei de várias competições de Robótica, onde tive um contato gigante com programação. Desde então, procurei aprimorar meus conhecimentos, e hoje sou Desenvolvedor Web, e meu lema é Sempre aprenda algo novo!</p>
                            </section>
                        </Row>
                        <Row>
                            <section>
                                <a href="#skills"><h3>STACK</h3></a>
                                <div className="skillGroup">
                                <Zoom cascade right>
                                        <div>HTML 5</div>
                                        <div>CSS 3</div>
                                        <div>JavaScript</div>
                                        <div>JQuery</div>
                                        <div>SASS</div>
                                        <div>Bootstrap</div>
                                        <div>React.Js</div>
                                        <div>ContextAPI</div>
                                        <div>React Hooks</div>
                                        <div>Redux</div>
                                        <div>React Router</div>
                                        <div>Jest</div>
                                        <div>RTL</div>
                                        <div>Node.Js</div>
                                        <div>SQL</div>
                                        <div>MongoDb</div>
                                        <div>Express.Js</div>
                                        <div>Mocha</div>
                                        <div>Shai</div>
                                        </Zoom>
                                </div>
                            </section>
                        </Row>
                        <Row>
                            <Fade cascade right>
                                <section>
                                    <a href="#projects"><h3>PROJETOS</h3></a>
                                    <div id="cardGroup">
                                            <Card image={api} title="Solar API" src="https://solarirradiation.herokuapp.com/coordinates/-7-55,-35" />
                                            <Card image={pixel} title="Pixel Art" src="https://abimaelr.github.io/pixelboard/"/>
                                            <Card image={todo} title="To-Do List"src="https://abimaelr.github.io/todolist/"/>
                                            <Card image={uab} title="Landing page" src="https://abimaelr.github.io/uab"/>
                                            <Card image={prime} title="PrimeIT Clone"src="https://abimaelr.github.io/primeit"/>
                                            <Card image={recipes} title="Recipes APP"src="https://abimaelr.github.io/recipesAPP/"/>
                                    </div>
                                </section>
                            </Fade>
                        </Row>
                        <Fade bottom>
                            <section>

                                <Row>
                                        <a href="#Formation"><h3>FORMAÇÃO</h3></a>
                                        <Col sm={4}>
                                            <div className="formation">
                                                <h4>Trybe</h4>
                                                <h6>Desenvolvimento Web FullStack</h6>
                                                <p>Curso com certificação livre (<i>2021 - 2022</i>) (1500H)</p>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="formation">
                                                <h4>Instituto Federal Da Paraíba</h4>
                                                <h6>Engenharia Elétrica</h6>
                                                <p>Bacharelado (<i>2017 - 2022</i>)</p>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="formation">
                                                <h4>Instituto Federal Da Paraíba</h4>
                                                <h6>Técnico em Eletrônica</h6>
                                                <p>(<i>2013 - 2017s</i>)</p>
                                            </div>
                                        </Col>
                                </Row>
                            </section>
                        </Fade>
                        <section>
                            <div className="links">
                                <a target="_blank" href="https://www.linkedin.com/in/abimaelrocha/">Linkedin</a>
                                <a target="_blank" href="https://github.com/Abimaelr">Github</a>
                                <a target="_blank" href="mailto:abimaelr.albu@gmail.com">Email</a>
                            </div>
                        </section>
                    </div>



                </Container>
        </div>
    )
}

export default Body
