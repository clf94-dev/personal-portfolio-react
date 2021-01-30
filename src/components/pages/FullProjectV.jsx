import React, {useEffect} from 'react'
import Cta from '../Cta';

import { BrowserRouter as Router, Link} from 'react-router-dom'
import Navbar from '../Navbar';
import ProjectFullViewV from '../ProjectFullViewV';

  
function FullProjectV() {
    var param = window.location.pathname;
    var segmArray =param.split('/');
    var index = segmArray.pop();
     


    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
      
    return (
        <div>
             <Navbar />
            <ProjectFullViewV  index={index}/>
            <Cta/>
        </div>
    )
}

export default FullProjectV;
