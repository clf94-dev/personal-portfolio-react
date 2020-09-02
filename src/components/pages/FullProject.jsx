import React from 'react'
import Cta from '../Cta';
import ProjectFullView from '../ProjectFullView';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from '../Navbar';

  
function FullProject() {
    var param = window.location.pathname;
    var segmArray =param.split('/');
    var index = segmArray.pop();
    return (
        <div>
             <Navbar />
            <ProjectFullView index={index}/>
            <Cta/>
        </div>
    )
}

export default FullProject;
