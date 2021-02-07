import React from 'react'
import c from './Ava.module.css'
import icon from './png'
const Ava = () =>{
    return (
    <div className={c.avatar}>

        <div className={c.ava}>
            <img src="https://i.pinimg.com/originals/b7/cd/b2/b7cdb2dd27fd48cde91f48e25317288f.jpg"
                 alt="avatarka"/>{/*avatar*/}
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