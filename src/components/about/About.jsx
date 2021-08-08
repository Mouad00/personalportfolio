import React from 'react'
import './About.scss'

import {FaMailBulk, FaPhoneAlt} from 'react-icons/fa'

export default function About() {
    return (
        <div className="about" id="about">
            <h1>A propos</h1>
            <div className="container">
                <h2>Enseignant chercheur en Informatique & Mathématique appliqués</h2>
                <p>
                Docteur de l'Institut National des Sciences Appliquées de Lyon en mathématiques appliquées. 
                Actuellement professeur en informatique à l'École Nationale des Sciences Appliquées (ENSA-Khouribga) de l'Université USMS depuis 2009, 
                affilié au département Mathèmatique et informatique. 
                Co-fondateur et memebre au laboratoire LIPIM (Ingénierie des Procédés, Informatique et Mathématique). 
                Mes domaines de recherche sont l'optimisation combinatoire, l'intégration et le traitement des données.
                </p>
                <div className="info">
                    <table>
                        <tbody>
                            <tr>
                                <td><FaPhoneAlt /></td>
                                <td>06281745278</td>
                            </tr>
                            <tr>
                                <td><FaMailBulk /></td>
                                <td>email@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>

                    <a href="google.com" className="cv">
                        CV
                    </a>
                    <a href="#contact" className="arrow-img">
                        Contactez moi
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

