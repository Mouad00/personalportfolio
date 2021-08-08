import React from "react";


import {Mail, Person} from '@material-ui/icons'
import "./Topbar.scss"
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        // + (menuOpen && "active")
        <div className={"topbar " + (menuOpen && "active")}> 
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo" >
                        Ghazdali Abdelghani
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+212 78 49 24 84</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>email@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
