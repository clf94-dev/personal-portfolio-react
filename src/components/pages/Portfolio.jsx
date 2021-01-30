import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core/';

import '../styles/App.css';
import { PortfolioData} from './PortfolioData'
import ProjectRow from '../ProjectRow';
import Cta from '../Cta';
import Navbar from '../Navbar';

function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
             <Navbar active='portfolio'/>
            {PortfolioData.map((item, index) =>{
                return (<ProjectRow  index={item.index} animation={item.animation}  title={item.title} text={item.text} classes={item.classes} />)
            })}
               <Cta/>
        </div>
    )
}

export default Portfolio;
