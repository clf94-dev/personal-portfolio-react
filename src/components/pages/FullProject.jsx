import React, {useEffect} from 'react'
import Cta from '../Cta';
import ProjectFullView from '../ProjectFullView';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from '../Navbar';

  
function FullProject() {
    var param = window.location.pathname;
    var segmArray =param.split('/');
    var index = segmArray.pop();
    segmArray =param.split('/');
    var lang= segmArray.pop();


    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    return (
        <div>
             <Navbar />
            <ProjectFullView lang={lang} index={index}/>
            <Cta/>
        </div>
    )
}

export default FullProject;
