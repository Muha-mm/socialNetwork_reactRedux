import React from 'react'
import c from './Photos.module.css'
const Photos = () =>{
    return (
    <div className={c.photos}>

        <div>
            <a href="#" className={c.photosCount}>7 фото</a>
        </div>

        <div className={c.allPhoto}>
            <a className={c.photo}>
                <img src='https://i.pinimg.com/400x300/74/b6/a8/74b6a8af0e3cfdba9d36f181a6148822.jpg' alt=""/>
            </a>
            <a className={c.photo}>
                <img src='https://i1.sndcdn.com/avatars-000037729329-t5vvr0-t500x500.jpg' className={c.photo2} alt=""/>
            </a>
            <a className={c.photo}>
                <img src='https://i.pinimg.com/originals/98/0b/77/980b776db433e0f7b9b009b27163f26d.jpg' className={c.photo3} alt=""/>
            </a>
        </div>

    </div>
)}
export default Photos