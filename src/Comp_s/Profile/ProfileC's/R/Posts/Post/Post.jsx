import React from 'react'
import c from './Post.module.css'
const Post = () =>{
    return (
    <div className={c.post}>
        <div className={c.header}>
            <a href={'#'} className={c.ava}>
                <img src={'https://i.pinimg.com/originals/b7/cd/b2/b7cdb2dd27fd48cde91f48e25317288f.jpg'} alt=""/>
            </a>
            <div className={c.name}>
                <a href="#">Leah Riggeti</a>
            </div>
            <div
                className={c.date}>18.01.21
            </div>
        </div>

        <div className={c.contentPost}>
            <div className={c.content}>
                Visions are worth fighting for. Why spend your life making
                someone else's dreams? ("Ed Wood", 1994).
            </div>
        </div>


        <div className={c.footer}>
            <hr/>

            <div className={c.like}></div>
        </div>
    </div>
)}
export default Post