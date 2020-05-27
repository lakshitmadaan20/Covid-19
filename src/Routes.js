import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import About from './components/About'
import Navbar from './components/Navbar'

export default function Routes() {
    return (
        <BrowserRouter>
        <Navbar/>
          <Switch>
           <Route path='/' exact component={App} />
           <Route path='/about' excat component={About} />
          </Switch>
        </BrowserRouter>
    )
}
