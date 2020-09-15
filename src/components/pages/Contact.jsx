import React,{useEffect} from 'react'
import Navbar from '../Navbar'
import ContactMe from '../ContactMe';

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div>
          <Navbar active='contact-me'/>
            <ContactMe />
            
        </div>
    )
}

export default Contact;
