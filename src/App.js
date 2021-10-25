import React from 'react'
import Bots from './components/bots'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav';
import ViewAlgo from './components/Singles';
import Cart from './components/cart'


export default function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Route path = {["/","/dashboard", "/bots"]} exact component = {Bots} />
        <Route path = {"/cart"} exact component = {Cart} />
        <Route path = "/bots/:id" exact component = {ViewAlgo}/>
      </div>
    </Router>
  )
}
