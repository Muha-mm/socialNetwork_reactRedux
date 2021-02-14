import React from 'react'
import c from './Inf.module.css'
const Inf = () =>{
    return (
        <div className={c.inf}>

            <div className={c.name}>
                <span className={c.leah}>Leah Riggeti</span>
            </div>

            <div className={c.mainInf}>

                <div className={c.item}>
                    <span className={c.key}>город: </span>
                    <span className={c.value}>Москва</span>
                </div>

                <div className={c.item}>
                    <span className={c.key}>день рождения: </span>
                    <span className={c.value}>09 мая 2003г.</span>
                </div>

                <div className={c.item}>
                    <span className={c.key}>сайт: </span>
                    <span className={c.value}>
                    <a href="https://github.com/Muha-mm/socialNetwork_reactRedux">
                        https://github.com/Muha-mm/socialNetwork_reactRedux
                    </a>
                    </span>
                </div>
            </div>

            <div className={c.fullInf}>
                <button className={c.fullInfButton}>
                    more information
                    {/*<img src={icon} className={c.editIcon} alt=""/>*/}
                </button>
            </div>

        </div>
)}
export default Inf