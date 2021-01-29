import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core/';

import '../styles/App.css';
import { PortfolioDataAngular} from './PortfolioDataAngular'
import ProjectRowAngular from '../ProjectRowAngular';
import Cta from '../Cta';
import Navbar from '../Navbar';

function PortfolioAngular (){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
             <Navbar active='portfolio'/>
            {PortfolioDataAngular.map((item, index) =>{
                return (<ProjectRowAngular lang={item.lang} index={item.index} animation={item.animation}  title={item.title} text={item.text} classes={item.classes} />)
            })}
               <Cta/>
        </div>
    )
}

export default PortfolioAngular;