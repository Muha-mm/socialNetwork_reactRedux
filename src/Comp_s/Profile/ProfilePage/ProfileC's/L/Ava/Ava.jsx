import React from 'react'
import c from './Ava.module.css'
import icon from './png'
const Ava = () =>{
    return (
    <div className={c.avatar}>

        <div className={c.ava}>
            <img src="https://clck.ru/SvH4y"
                 alt="avatarka"/>
        </div>

        <div className={c.edit}>
            <button className={c.editButton}>
                редактировать
                <img src={icon} className={c.editIcon} alt=""/>
            </button>
        </div>
    </div>
)}
export default Ava