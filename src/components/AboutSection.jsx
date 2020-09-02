import React from 'react'
import {Grid} from '@material-ui/core/';
import './styles/App.css'
import Profile from './images/homepage/profile-img-carmen.JPEG'
import {Button} from './Button';

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();


function AboutSection() {
    return (
        <div>
            <Grid container direction="row" className='about-me-row'>
                <Grid item md={6} xs={12} className='img-col'>
                    <img src={Profile} alt="about me image" className='aboutme-img'  data-aos="fade-up" data-aos-duration="2000"/>
                </Grid>
                <Grid item md={6} xs={12} className='text-col' direction='column'data-aos="fade-left" data-aos-duration="2000">
                    <h3>About Me</h3>
                    <p> I’m an Industrial Engineer and self-taught junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript /Jquery.
                   </p>
                   <p>I have experience using Bootstrap 4, Github and Sass. I also have some experience in mobile development in Swift and Flutter. Currently, I am learning React and Express.js. I have future plans of learning about Back-End development
                        too.</p>
                   <p>I learn quickly so I can adapt to whatever tools are required. I’m based in Madrid, Spain, but I’m happy working remotely. When I’m not coding, you’ll find me reading or outdoors. I love being out in nature whether that’s going for
                        a walk or cycling. I’d love you to check out my work.</p>
                    <Button
                        className='about-btn'
                        link='/portfolio'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                            GO TO PORTFOLIO</Button>

                </Grid>

            </Grid>
        </div>
    )
}

export default AboutSection
