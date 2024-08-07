// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Gymnastics School</div>
            <nav>
                <ul>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#gallery">Галерея</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
