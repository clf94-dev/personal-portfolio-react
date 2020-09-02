import React from 'react'
import {Grid} from '@material-ui/core/';
import './styles/App.css'
import HeroTopImg from './images/homepage/image-homepage-hero.jpg'

function HeroSection() {
    return (
        <div>
            <Grid container direction="row" className='hero-section-row'>
                <Grid item md={6} xs={12} className='img-col'>
                    <img src={HeroTopImg} alt="hero section image" className='hero-section-img'/>
                </Grid>
                <Grid item md={6} xs={12} className='text-col'>
                    <h1>Hey, I’m Carmen Lucas and I love building beautiful and responsive websites
                   
                    </h1>

                </Grid>

            </Grid>
        </div>
    )
}

export default HeroSection;
