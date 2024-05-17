import React from 'react';

export default function Header() {
    return (
        <header className="header--container">
            <div className="headerSub--container">
                <img src="../../images/troll-face.png" className="troll" alt="troll face" />
                <h1 className="header--title">Meme Generator</h1>
            </div>
            <h3 className="header--course">React Course - Project 3</h3>
        </header>
    )
}