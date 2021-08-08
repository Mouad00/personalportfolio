import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

import { SocialIcon } from 'react-social-icons';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,
             { 
                backDelay: 1500,
                backSpeed: 50,
                showCursor: true,
                 strings: ['Universitaire', 'Chercheur', 'Encadrant' ]
             });
    }, [])

    return (
        <div className="intro" id="intro">
            {/* <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Bonjour, Je suis</h2>
                    <h1>Nom et prenom</h1>
                    <h3>Professeur <span ref={textRef}></span></h3>
                </div>
                <a href="#about">
                    <img src="assets/down.png" alt="" />
                </a>
            </div> */}

            <div className="container">
                <div className="left">
                    <div className="avatar">
                        <img src="assets/man.png" alt="" />
                    </div>
                    <div className="wrapper">
                        <h2>Bonjour, Je suis</h2>
                        <h1>Nom et prenom</h1>
                        <h3>Professeur <span ref={textRef}></span></h3>
                    </div>
                    <div className="social">
                        <SocialIcon url="https://twitter.com"/>
                        <SocialIcon url="https://facebook.com" />
                        <SocialIcon url="https://linkedin.com" />
                        <SocialIcon url="https://www.researchgate.net/" />
                    </div>
                </div>
                <div className="right">
                    <h2>Enseignant chercheur en Informatique & Mathématique appliqués</h2>
                    <p>
                    Docteur de l'Institut National des Sciences Appliquées de Lyon en mathématiques appliquées. 
                    Actuellement professeur en informatique à l'École Nationale des Sciences Appliquées (ENSA-Khouribga) de l'Université USMS depuis 2009, 
                    affilié au département Mathèmatique et informatique. 
                    Co-fondateur et memebre au laboratoire LIPIM (Ingénierie des Procédés, Informatique et Mathématique). 
                    Mes domaines de recherche sont l'optimisation combinatoire, l'intégration et le traitement des données.
                    </p>
                </div>
            </div>
            <a href="#portfolio" className="arrow">
                <img src="assets/down.png" alt="" />
            </a>
            

        </div>
    )
}
