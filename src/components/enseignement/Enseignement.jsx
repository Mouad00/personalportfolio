import React from 'react'
import './Enseignement.scss';

import data from './data';


function Enseignement() {
    return (
        <div className="enseignement" id="enseignement">
            <h1>Enseignement</h1>
                <div className="container">
                {data.map((d) => (
                    <div className="card" key={d.id}>
                        <span className="icon">{d.icon}</span>
                        <h3>{d.title}</h3>
                        <p>{d.desc}</p>
                        <a href={d.link}>More</a>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

export default Enseignement
