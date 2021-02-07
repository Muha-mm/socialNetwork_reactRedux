import React from 'react'
import c from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () =>{
    return (
        <nav className={c.nav}>

            <div className={c.items}>
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
                    <NavLink to = "/Users" activeClassName={c.active}> Users </NavLink>
                </div>

                <div className={c.item}>
                    <NavLink to = "/Settings" activeClassName={c.active}> Settings </NavLink>
                </div>
            </div>

        </nav>
    )}
export default Nav