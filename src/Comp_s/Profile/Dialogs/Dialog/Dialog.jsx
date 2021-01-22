import React from 'react'
import c from './Dialog_item.module.css'
import {NavLink} from "react-router-dom";
const Dialog_item = () =>{
    return(
        <div className={c.dialogs_item}>
            <div className={c.items}>
                <div className={c.item}>
                    <NavLink to = '/Dialogs/1' activeClassName={c.active}>Innokent</NavLink>
                </div>

                <div className={c.item}>
                    <NavLink to = '/Dialogs/2' activeClassName={c.active}>Patriki</NavLink>
                </div>

                <div className={c.item}>
                    <NavLink to = '/Dialogs/3' activeClassName={c.active}>Kantogor-Egor</NavLink>
                </div>

                <div className={c.item}>
                    <NavLink to = '/Dialogs/4' activeClassName={c.active}>Kareliy</NavLink>
                </div>
            </div>


        </div>
    )
}
export default Dialog_item