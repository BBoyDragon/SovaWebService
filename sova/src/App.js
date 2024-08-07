// src/App.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Banner />
            <About />
            <Services />
            <Gallery />
            <Contacts />
        </div>
    );
}

export default App;
