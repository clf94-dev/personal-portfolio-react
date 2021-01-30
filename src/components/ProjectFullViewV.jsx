import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core/';
import {Button} from './Button';
import './styles/App.css';
import {PortfolioFullProj} from './PortfolioFullProj';

import ArrowLeft from './images/icons/arrow-left.svg';
import ArrowRight from './images/icons/arrow-right.svg';

import {
    Manage,
    Bookmark,
    Insure,
    IPTrackerTop,
    CountriesDictionary,
    Covid,
    Crypto,
    Scoot,
    EasyBank,
    ChatApp,
    Dine,
    PhotoSnap, 
    Arch, 
    MyTeam,
    PayApi,
} from './TopImgProjects'
import {
    ManageStatic,
    BookmarkStatic,
    InsureStatic,
    IPTrackerStatic1,
    CryptoStatic1,
    CovidStatic1,
    ScootStatic1,
    EasyBankStatic1,
    ChatAppStatic1,
    DineStatic1,
    SnapshotStatic,
    ArchStatic, 
    MyTeamStatic,
    PayApiStatic,
} from './StaticImgProjects'
import {
    ManageStatic2,
    BookmarkStatic2,
    InsureStatic2,
    IPTrackerStatic,
    CountriesStatic,
    CryptoStatic2,
    CovidStatic2,
    ScootStatic2,
    EasyBankStatic2,
    ChatAppStatic2,
    DineStatic2,
    SnapshotStatic2,
    ArchStatic2, 
    MyTeamStatic2,
    PayApiStatic2,
} from './Static2ImgProjects'

export default function ProjectFullViewV(props) {
    const ProjectTopImg = [
        Arch,
        PayApi,
        MyTeam,
        PhotoSnap
    ];
    const ProjectStaticImg =
        [ArchStatic,
            PayApiStatic,
            MyTeamStatic,
            SnapshotStatic];
    const ProjectStaticImg2 = 
        [ArchStatic2,
            PayApiStatic2,
            MyTeamStatic2,
            SnapshotStatic2];
    const previousProject = [3,0,1,2];
    const webLinks = [
        "https://snapshot-web-clf94-dev.netlify.app",
        "https://covid-19-tracker-clf94-dev.netlify.app/",
        "https://crypto-price-eur-usd-tracker-clf94-dev.netlify.app/",
        "https://countries-info-api-clf94-dev.netlify.app/",
        'https://dine-restaurant-clf94-dev.netlify.app/',
        "https://ip-address-tracker-clf94-dev.netlify.app/",
        "https://manage-landing-page-26jdlsq2z.vercel.app/",
        "https://booking-landing-page.vercel.app/",
        "https://insure-landing-page-gegnuifr6.vercel.app/",
        "https://scoot-multi-page-website-git-master.clf94-dev.vercel.app/",
        "https://easybank-landing-page-git-master.clf94-dev.vercel.app/",
        "https://chat-app-landing-page-git-master.clf94-dev.vercel.app/"
    ]
    const nextProject = [1,2,3,0];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

                        <a href={webLinks[props.index]}>
                            <button className='project-btn' link={webLinks[props.index]}>

                                VIEW WEBSITE

                            </button>
                        </a>
                        <hr/>
                    </Grid>
                    <Grid item sm={6} xs={12} direction='column' className='right-text'>
                        <Grid container className='text-cont' direction='column'>
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
                                    link={`/full-project-vue/${previousProject[props.index]}`}><img className='previous-next-btn' src={ArrowLeft} alt="arrow left"/></Button>
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
                            <Grid
                                item
                                md={2}
                                xs={4}
                                direction='column'
                                style={{
                                textAlign: 'end'
                            }}>
                                <Button
                                    buttonStyle='btn--outline'
                                    link={`/full-project-vue/${nextProject[props.index]}`}><img className='previous-next-btn' src={ArrowRight} alt="arrow right"/></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}
