import './Contacts.scss'
import React, { useState, useEffect } from 'react';
import { SocialIcon } from 'react-social-icons';
import {Mail, Person} from '@material-ui/icons'
import LocationOnIcon from '@material-ui/icons/LocationOn';
export default function Contacts() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    useEffect(() => {
        const intervalID = setTimeout(() =>  {
            setMessage(false);
        }, 1000);
        return () => intervalID
    }, [])
    
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className="info">
                <div className="left">
                    <img src="assets/shake.svg" alt="" />
                </div>
                <div className="right">
                    <h2>Contact</h2>
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Nom" />
                        <input type="text" placeholder="Email" />
                        <textarea placeholder="Message" name="" id="" cols="30" rows="5"></textarea>
                        <button type="submit">Envoyer</button>
                        {message && <span>Merci pour votre message, je repond ASAP :)</span>}
                    </form>
                </div>
            </div>
            <div className="reserved">
                <div className="info-contact">
                    <div className="itemContainer">
                        <LocationOnIcon className="icon" />
                        <span>BD Béni Amir, BP 77, Khouribga </span>
                    </div>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+212 78 49 24 84</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>email@gmail.com</span>
                    </div>
                </div>
                <div className="bottom">
                    <span className="rights">&copy; All rights reserved</span>
                    <div className="social">
                        <SocialIcon url="https://twitter.com"/>
                        <SocialIcon url="https://facebook.com" />
                        <SocialIcon url="https://linkedin.com" />
                        <SocialIcon url="https://www.researchgate.net/" />
                    </div>
                </div>
            </div>

        </div>
    )
}
