import React, {useEffect} from 'react'
import {Grid} from '@material-ui/core/';

import '../styles/App.css';
import { PortfolioDataVue} from './PortfolioDataVue'
import ProjectRowVue from '../ProjectRowVue';
import Cta from '../Cta';
import Navbar from '../Navbar';

function PortfolioVue (){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <div>
             <Navbar active='portfolio'/>
            {PortfolioDataVue.map((item, index) =>{
                return (<ProjectRowVue lang={item.lang} index={item.index} animation={item.animation}  title={item.title} text={item.text} classes={item.classes} />)
            })}
               <Cta/>
        </div>
    )
}

export default PortfolioVue;