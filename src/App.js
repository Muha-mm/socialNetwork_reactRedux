import React from 'react'
import './App.css'
import {Route} from 'react-router-dom'
import Header from "./Comp_s/Header/Header"
import Nav from "./Comp_s/Nav/Nav"
import Profile from "./Comp_s/Profile/ProfilePage/Profile"
// import Users from "./Comp_s/Profile/Users/Users";
import News from "./Comp_s/Profile/News/News";
import Settings from "./Comp_s/Profile/Setings/Settings";
import Dialogs from "./Comp_s/Profile/Dialogs/Dialogs";
import Container from "./Comp_s/Profile/Users/UsersContainer";
import newsPageContainer from "./Comp_s/Profile/News/NewsContainer";
const App = (props) => {
  return (
    <div className="app">
        <Header/>
        <Nav/>
        <div className='app-content'>
            <Route exact path = {["/Profile", "/"]}
                   render = {() =>
                   <Profile profilePage = {props.store.getState().profilePage}/>}/>

            <Route path = '/Dialogs'
                   render = {() =>
                   <Dialogs dialogsPage = {props.store.getState().dialogsPage}/>}/>

            <Route path = '/Users'
                   render={ () => <Container /> }/>
            <Route path = '/News' component={newsPageContainer}/>
            <Route path = '/Settings' component={Settings}/>
        </div>
    </div>
  );
}

export default App;
