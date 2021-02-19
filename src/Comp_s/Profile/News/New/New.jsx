import React from 'react'
import c from './New.module.css'

const New = (props) => {
    return (
        <div className={c.new}>author:
            {props.author===null? ' иноземные нашептанья (автор не указан)': <span className={c.author}>{props.author}</span>
                }
            <div className={c.header}>{props.title}</div>
            <div className={c.description}>{` ${props.description}`}</div>
            <span className={c.date}>date: {props.publishedAt}</span>
            <span className={c.url}>
                <a href={props.url}>Перейти к источнику</a>
            </span>
            <div >
                <img className={c.photo} src={props.urlToImage} alt=""/>
            </div>
        </div>
    )
}
export default New