import React from 'react'
import {Grid} from '@material-ui/core/';
import {Button} from './Button';

import './styles/App.css';

import Manage from './images/portfolio/image-portfolio-manage.jpg';
import Bookmark from './images/portfolio/image-portfolio-bookmark.jpg';
import Insure from './images/portfolio/image-portfolio-insure.jpg';
import Fylo from './images/portfolio/image-portfolio-fylo.jpg';
import CountriesDictionary from'./images/detail/countries-api-top.jpg';
import Covid from './images/detail/covidTop.jpg';
import Crypto from './images/detail/cryptoTop.jpg';
import Scoot from './images/portfolio/scoot-top.jpg';
import EasyBank from './images/portfolio/easybank-top.jpg';
import ChatApp from './images/portfolio/chat-app-top.jpg';
import Dine from './images/portfolio/dine-top.jpg';

import AOS from 'aos'
import 'aos/dist/aos.css';
AOS.init();

function ProjectRow(props) {
    const ProjectsImg = [Covid, Crypto, CountriesDictionary ,Fylo ,Manage, Bookmark, Insure,Scoot, EasyBank, ChatApp, Dine ];
    return (
        <div>
            <Grid container direction="row" className={props.classes} data-aos={props.animation} data-aos-duration="1200">
                <Grid item md={6} xs={12} className='img-col'>
                    <img
                        src={ProjectsImg[props.index]}
                        alt=" image"
                        className='project-img'/>
                </Grid>
                <Grid item md={6} xs={12} className='text-col' direction='column'>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <Button
                        className='project-btn'
                        link={`/full-project/${props.index}`}
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'>
                        VIEW PROJECT
                          </Button>

                </Grid>

            </Grid>
        </div>
    )
}

export default ProjectRow
