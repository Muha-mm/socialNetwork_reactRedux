import React from 'react'
import { defaultProps } from 'react-stickynode'
import c from './Post.module.css'

const Post = (props) =>{
    return (
    <div className={c.post}>
        <div className={c.header}>
            <a href={'#'} className={c.ava}>
                <img src='https://i.pinimg.com/originals/b7/cd/b2/b7cdb2dd27fd48cde91f48e25317288f.jpg' alt=""/>
            </a>

            <div className={c.name}>
                <a href="#">
                    Leah Riggeti
                </a>
            </div>

            <div className={c.date}>
                {props.time}
            </div>
        </div>

        <div className={c.contentPost}>
            <div className={c.content}>
                {props.message}
            </div>
        </div>


        <div className={c.footer}>
            <hr/>
        </div>
    </div>
)}
export default Post