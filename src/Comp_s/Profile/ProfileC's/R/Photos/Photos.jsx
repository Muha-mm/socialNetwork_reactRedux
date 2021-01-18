import React from 'react'
import c from './Photos.module.css'
import photo1 from './3photo/soska3.jpg'
import photo2 from './3photo/soska4.jpg'
import photo3 from './3photo/soska5.jpg'
const Photos = () =>{
    return (
    <div className={c.photos}>

        <div>
            <a href="#" className={c.photosCount}>7 фото</a>
        </div>

        <div className={c.allPhoto}>
            <a className={c.photo}>
                <img src={photo1} alt=""/>
            </a>
            <a className={c.photo}>
                <img src={photo2} className={c.photo2} alt=""/>
            </a>
            <a className={c.photo}>
                <img src={photo3} className={c.photo3} alt=""/>
            </a>
        </div>


    </div>
)}
export default Photos