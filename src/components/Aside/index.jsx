import React from 'react';
import './style.css';
import profile from './img/photo.png'

function Aside() {
    return (
        <div id="aside">
            <div className="profile">
                <img src={profile} alt="Abimael Rocha" />
            </div>
            <div id="name">
                <h2>Abimael Albuquerque</h2>
                <h3>Desenvolvedor Web</h3>
            </div>
            <div className="horizontal" />
        </div>
    )
}

export default Aside
