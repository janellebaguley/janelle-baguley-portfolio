import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Wireframe from './components/Wireframes/Wireframe'
import Technologies from './components/Technologies/Technologies'
import Resume from './components/Resume/Resume'


export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/projects' component={Projects}/>
        <Route path= '/technologies' component={Technologies}/>
        <Route path= '/wireframes' component={Wireframe}/>
        <Route path='/resume' component={Resume}/>
    </Switch>
)