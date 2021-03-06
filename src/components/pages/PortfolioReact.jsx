import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core/';

import '../styles/App.css';
import { PortfolioDataReact} from './PortfolioDataReact'
import ProjectRowReact from '../ProjectRowReact';
import Cta from '../Cta';
import Navbar from '../Navbar';

function PortfolioReact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
             <Navbar active='portfolio'/>
            {PortfolioDataReact.map((item, index) =>{
                return (<ProjectRowReact lang={item.lang} index={item.index} animation={item.animation}  title={item.title} text={item.text} classes={item.classes} />)
            })}
               <Cta/>
        </div>
    )
}

export default PortfolioReact;
