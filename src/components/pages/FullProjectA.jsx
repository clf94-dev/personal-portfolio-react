import React, {useEffect} from 'react'
import Cta from '../Cta';
import ProjectFullViewA from '../ProjectFullViewA';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from '../Navbar';

  
function FullProjectA() {
    var param = window.location.pathname;
    var segmArray =param.split('/');
    var index = segmArray.pop();
     


    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    return (
        <div>
             <Navbar />
            <ProjectFullViewA  index={index}/>
            <Cta/>
        </div>
    )
}

export default FullProjectA;
