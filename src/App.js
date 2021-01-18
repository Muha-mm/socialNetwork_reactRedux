import React from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import './App.css'
import {Route} from 'react-router-dom'
import Header from "./Comp_s/Header/Header"
import Nav from "./Comp_s/Nav/Nav"
import Profile from "./Comp_s/Profile/Profile"
import Music from "./Comp_s/Profile/Music/Music";
import News from "./Comp_s/Profile/News/News";
import Settings from "./Comp_s/Profile/Setings/Settings";
import Dialogs from "./Comp_s/Profile/Dialogs/Dialogs";
const App = () => {
  return (
    <div className="app">
        <Header/>
        <Nav/>
        <div className='app-content'>
            <Route exact path = {["/Profile", "/"]} component={Profile}/>
            <Route path = '/Dialogs' component={Dialogs}/>
            <Route path = '/Music' component={Music}/>
            <Route path = '/News' component={News}/>
            <Route path = '/Settings' component={Settings}/>
        </div>
    </div>
  );
}

export default App;
