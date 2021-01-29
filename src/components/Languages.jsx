import React from 'react'
import {Grid} from '@material-ui/core/';

import {Button} from './Button';
import './styles/App.css';


function Languages(){
    return(
<div className='languages-cont'>
    <h3>Frameworks I use</h3>
<Grid container direction="row" className="icons-row">
<Grid item xs={12} sm={6} md={2} direction='column' className="logo">
    <i className='fab fa-4x fa-react react'></i>
</Grid>
<Grid item xs={12} sm={6} md={2} direction='column' className="logo">
    <i className='fab fa-4x fa-angular angular'></i>
</Grid>
<Grid item xs={12} sm={6} md={2} direction='column' className="logo">
    <i className='fab fa-4x fa-vuejs vue'></i>
</Grid>
<Grid item xs={12} sm={6} md={2} direction='column' className="logo">
    <i className='fab fa-4x fa-js javascript'></i>
</Grid>
<Grid item xs={12} sm={6} md={2} direction='column' className="logo">
    <i className='fab fa-4x fa-css3-alt css'></i>
</Grid>
<Grid item xs={12} sm={6} md={2} direction='column' className="logo">
    <i className='fab fa-4x fa-html5 html'></i>
</Grid>

</Grid>

<h3>Other libraries I use</h3>
<Grid container direction="row" className="icons-row">
<Grid item xs={12} sm={6} md={3} direction='column' className="logo">
    <i className='fab fa-4x fa-sass sass'></i>
</Grid>
<Grid item xs={12} sm={6} md={3} direction='column' className="logo">
<i className="fab fa-4x fa-bootstrap boots"></i>
</Grid>
<Grid item xs={12} sm={6} md={3} direction='column' className="logo">
<i class="fab fa-4x fa-npm npm"></i>
</Grid>
<Grid item xs={12} sm={6} md={3} direction='column' className="logo">
<i className="fab fa-4x fa-github-square git"></i>
</Grid>


</Grid>
</div>)
}

export default Languages;