import React, {useEffect} from 'react'
import HeroSection from '../HeroSection'
import Cta from '../Cta'
import Languages from '../Languages'
import '../styles/App.css';
import AboutSection from '../AboutSection';
import Navbar from '../Navbar';
import Frameworks from '../Frameworks';

export default function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return ( < div > <Navbar active='home'/> < HeroSection / > <AboutSection/> <Languages/> <Frameworks/> < Cta /> </div>);
}

 