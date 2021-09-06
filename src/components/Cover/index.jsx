import React from 'react';
import './style.css';
import { Fade } from 'react-reveal';
import profile from './img/photo.png'

function Aside() {
    return (
        <div id="aside">
            <div className="profile">
            </div>
            <div id="name">
                <Fade big>
                    <h1>Abimael &bull; <span>Albuquerque</span></h1>
                    <h3>Desenvolvedor Web</h3>
                </Fade>
            </div>
            <div className="horizontal" />
        </div>
    )
}

export default Aside
