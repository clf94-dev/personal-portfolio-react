import React, {useEffect} from 'react'
import Cta from '../Cta';
import ProjectFullViewR from '../ProjectFullViewR';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from '../Navbar';

  
function FullProjectR() {
    var param = window.location.pathname;
    var segmArray =param.split('/');
    var index = segmArray.pop();
     


    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    return (
        <div>
             <Navbar />
            <ProjectFullViewR  index={index}/>
            <Cta/>
        </div>
    )
}

export default FullProjectR;
