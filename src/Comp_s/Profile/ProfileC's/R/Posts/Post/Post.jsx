import React from 'react'
import c from './Post.module.css'
import ava from './avaHUB.jpg'

const Post = () =>{
    return (
    <div className={c.post}>
        <div className={c.header}>
            <a href={'#'} className={c.ava}>
                <img src={ava} alt=""/>
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
            {/*<div className={c.postFooter}></div>*/}
        </div>
    </div>
)}
export default Post