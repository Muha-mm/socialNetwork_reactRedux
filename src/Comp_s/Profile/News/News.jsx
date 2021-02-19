import React from 'react'
import c from './News.module.css'
import New from "./New/New";

const News = (props) => {
    let newsElements = props.news.map((n) => {
        return <New author={n.author} description={n.description}
                    publishedAt={n.publishedAt} id={n.source.id} title={n.title}
                    url={n.url} urlToImage={n.urlToImage}/>
    })
    return (
        <div className={c.news}>
            <div className={c.header}>
                <div className={c.logo}>
                    <span className={c.theOneMore}>
                        <span className={c.the}>the</span>
                        <div className={c.oneMore}>one more</div>
                    </span>

                    <span className={c.badNews}>
                        <span className={c.bad}>bad</span>
                            <span className={c.new}> new</span>
                            <span className={c.s}>s</span>
                    </span>
                </div>
            </div>
            {/*<input type="text" className={c.keyWord} value={props.keyWordText}*/}
            {/*       onChange={props.updateKeyWordText}*/}
            {/*       onKeyDown={(e)=>{if(e.keyCode === 13){props.setNews()}}}/>*/}
            <div className={c.content}>
                {/*{newsElements}*/}
            </div>

        </div>
    )
}
export default News