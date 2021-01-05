import React from 'react'
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom'
import Dialogs_item from "../Profile/Dialogs/Dialogs";
import Music from "../Profile/Music/Music";
import News from "../Profile/News/News";
import Posts from "../Profile/Posts/Posts";
import ProfileInfo from "../Profile/ProfileInfo/ProfileInfo";
import Settings from "../Profile/Setings/Settings";
const Nav = () =>{
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to = "/Profile" activeClassName={c.active}> Profile </NavLink>
            </div>

            <div className={c.item}>
                <NavLink to = "/Dialogs" activeClassName={c.active}> Messages </NavLink>
            </div>

            <div className={c.item}>
                <NavLink to = "/News" activeClassName={c.active}> News </NavLink>
            </div>

            <div className={c.item}>
                <NavLink to = "/Music" activeClassName={c.active}> Music </NavLink>
            </div>

            <div className={c.item}>
                <NavLink to = "/Settings" activeClassName={c.active}> Settings </NavLink>
            </div>
        </nav>
    )}
export default Nav