import React from 'react'
import HeroSection from '../HeroSection'
import Cta from '../Cta'
import '../styles/App.css';
import AboutSection from '../AboutSection';
import Navbar from '../Navbar';

export default function Home() {
    return ( < div > <Navbar active='home'/> < HeroSection / > <AboutSection/> < Cta /> </div>);
}

 