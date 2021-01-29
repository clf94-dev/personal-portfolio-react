import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx';
import PortfolioReact from './pages/PortfolioReact.jsx';
import PortfolioAngular from './pages/PortfolioAngular.jsx';
import PortfolioVue from './pages/PortfolioVue.jsx';
import FullProject from './pages/FullProject.jsx'
import Contact from './pages/Contact';
function App() {
    return (
        <div>
            <Router>
                
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/portfolio' component={Portfolio}></Route>
                    <Route path='/portfolioreact' component={PortfolioReact}></Route>
                    <Route path='/portfolioangular' component={PortfolioAngular}></Route>
                    <Route path='/portfoliovue' component={PortfolioVue}></Route>
                    <Route path='/full-project/:lang/:index' component={FullProject}></Route>

                    <Route path='/contact-me' component={Contact}></Route>
                    
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
