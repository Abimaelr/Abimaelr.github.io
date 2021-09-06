import React from 'react';
import './style.css'

function index(props) {
    return (
        <div className="card" style={{backgroundImage: `url(${props.image})`}}>
            <div className="info">
                <h4 className="cardTitle">{props.title}</h4>
                <p className="cardSinopse">{props.descr}</p>
                <p className="date"><a target="_blank" href={props.src}>Acesse</a></p>
            </div>
        </div>
    )
}

export default index
