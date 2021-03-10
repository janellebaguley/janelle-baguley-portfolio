import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Wireframe from './components/Wireframe'
import Technologies from './components/Technologies'
import Resume from './components/Resume'


export default (
    <Switch>
        <Route exact path= '/' component={Home}/>
        <Route path= '/about' component={About}/>
        <Route path= '/projects' component={Projects}/>
        <Route path= '/technologies' component={Technologies}/>
        <Route path= '/wireframe' component={Wireframe}/>
        <Route path='/resume' component={Resume}/>
    </Switch>
)