import React from 'react'
import {Grid} from '@material-ui/core/';
import {Button} from './Button';
import './styles/App.css';
import {PortfolioFullProj} from './PortfolioFullProj';

import ArrowLeft from './images/icons/arrow-left.svg';
import ArrowRight from './images/icons/arrow-right.svg';

import Manage from './images/detail/image-manage-hero.jpg';
import Bookmark from './images/detail/image-bookmark-hero.jpg';
import Insure from './images/detail/image-insure-hero.jpg';
import Fylo from './images/detail/image-fylo-hero.jpg';
import CountriesDictionary from'./images/detail/countries-api-top.jpg';
import Covid from './images/detail/covidTop.jpg';
import Crypto from './images/detail/cryptoTop.jpg';
import Scoot from './images/portfolio/scoot-top.jpg';
import EasyBank from './images/portfolio/easybank-top.jpg';
import ChatApp from './images/portfolio/chat-app-top.jpg';
import Dine from './images/portfolio/dine-top.jpg';


import ManageStatic from './images/detail/image-manage-preview-1.jpg';
import BookmarkStatic from './images/detail/image-bookmark-preview-1.jpg';
import InsureStatic from './images/detail/image-insure-preview-1.jpg';
import FyloStatic from './images/detail/image-fylo-preview-1.jpg';
import CryptoStatic1 from './images/detail/cryptostatic1.jpg';
import CovidStatic1 from './images/detail/covidstatic1.jpg';
import ScootStatic1 from './images/portfolio/scoot-top.jpg';
import EasyBankStatic1 from './images/portfolio/easybank-top.jpg';
import ChatAppStatic1 from './images/portfolio/chat-app-top.jpg';
import DineStatic1 from './images/portfolio/dine-top.jpg';

import ManageStatic2 from './images/detail/image-manage-preview-2.jpg';
import BookmarkStatic2 from './images/detail/image-bookmark-preview-2.jpg';
import InsureStatic2 from './images/detail/image-insure-preview-2.jpg';
import FyloStatic2 from './images/detail/image-fylo-preview-2.jpg';
import CountriesStatic from './images/detail/countries-api-static.jpeg';
import CryptoStatic2 from './images/detail/cryptostatic2.jpg';
import CovidStatic2 from './images/detail/covidstatic2.jpg';
import ScootStatic2 from './images/portfolio/scoot-static.jpg';
import EasyBankStatic2 from './images/portfolio/easybank-static.jpg';
import ChatAppStatic2 from './images/portfolio/chat-app-static.jpg';
import DineStatic2 from './images/portfolio/dine-static.jpg';

export default function ProjectFullView(props) {
    const ProjectTopImg = [Covid, Crypto, CountriesDictionary ,Fylo ,Manage, Bookmark, Insure, Scoot, EasyBank, ChatApp, Dine ];
    const ProjectStaticImg = [CovidStatic1,CryptoStatic1, CountriesDictionary , FyloStatic,ManageStatic, BookmarkStatic, InsureStatic, ScootStatic1, EasyBankStatic1, ChatAppStatic1, DineStatic1 ];
    const ProjectStaticImg2 = [CovidStatic2, CryptoStatic2, CountriesStatic ,FyloStatic2,ManageStatic2, BookmarkStatic2, InsureStatic2, ScootStatic2, EasyBankStatic2, ChatAppStatic2, DineStatic2 ];
    const previousProject = [6, 0, 1, 2,3,4 ,5,6,7,8,9,10];
    const webLinks =["https://covid-19-tracker-clf94-dev.netlify.app/","https://crypto-price-eur-usd-tracker-clf94-dev.netlify.app/","https://countries-info-api-clf94-dev.netlify.app/","https://fylo-dark-theme-landing-page-hk1hmyywi.vercel.app/","https://manage-landing-page-26jdlsq2z.vercel.app/","https://booking-landing-page.vercel.app/", "https://insure-landing-page-gegnuifr6.vercel.app/","https://scoot-multi-page-website-git-master.clf94-dev.vercel.app/","https://easybank-landing-page-git-master.clf94-dev.vercel.app/","https://chat-app-landing-page-git-master.clf94-dev.vercel.app/",'https://dine-restaurant-clf94-dev.netlify.app/']
    const nextProject = [1, 2, 3,4,5,6,7,8,9,10, 0];

    return (

        <div>
            <Grid container direction='column' className='full-project-cont'>
                <img
                    className='project-top'
                    src={ProjectTopImg[props.index]}
                    alt="project hero"/>
                <Grid container direction="row" className='description-row'>
                    <Grid item sm={6} xs={12} direction='column' className='left-text'>
                        <hr/>
                        <h2>{PortfolioFullProj[props.index].titleRight}</h2>
                        <p>{PortfolioFullProj[props.index].textRight}</p>
                        <h5>{PortfolioFullProj[props.index].designType}</h5>
                        <h5>{PortfolioFullProj[props.index].languages}</h5>
                        
                        <a href={webLinks[props.index]}><button
                            className='project-btn'
                            link={ webLinks[props.index]}>
                         
                           VIEW WEBSITE
                          
                            
                        </button>
                        </a>
                        <hr/>
                    </Grid>
                    <Grid item sm={6} xs={12} direction='column' className='right-text'>
                        <Grid container className='text-cont' direction='colum'>
                            <h3>{PortfolioFullProj[props.index].titleLeft}</h3>
                            <p>{PortfolioFullProj[props.index].textLeft}</p>
                            <h3>{PortfolioFullProj[props.index].staticTitle}</h3>
                        </Grid>
                        <img src={ProjectStaticImg[props.index]} alt="static preview 1"/>
                        <img src={ProjectStaticImg2[props.index]} alt="static preview 2"/>
                    </Grid>
                </Grid>

                <Grid container direction='row' className='next-prev-proj'>
                    <Grid item sm={6} xs={6} direction='row' className='column-left'>
                        <Grid container direction='row'>
                            <Grid item md={2} xs={4} direction='column'>
                                <Button
                                    buttonStyle='btn--outline'
                                    link={`/full-project/${previousProject[props.index]}`}><img className='previous-next-btn' src={ArrowLeft} alt="arrow left"/></Button>
                            </Grid>
                            <Grid item md={10} xs={8} direction='column' className='previous-text'>
                                <h5>Previous Project</h5>
                                <h3>{PortfolioFullProj[previousProject[props.index]].titleRight}</h3>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={6} direction='row' className='column-right'>
                        <Grid container direction='row'>
                            <Grid item md={10} xs={8} direction='column' className='next-text'>
                                <h5>Next Project</h5>

                                <h3>{PortfolioFullProj[nextProject[props.index]].titleRight}</h3>

                            </Grid>
                            <Grid item md={2} xs={4} direction='column' style={{textAlign: 'end'}}>
                                <Button
                                    buttonStyle='btn--outline'
                                    link={`/full-project/${nextProject[props.index]}`}><img className='previous-next-btn' src={ArrowRight} alt="arrow right"/></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}
