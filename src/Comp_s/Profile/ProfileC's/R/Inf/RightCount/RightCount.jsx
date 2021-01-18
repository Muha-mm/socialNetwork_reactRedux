import React from 'react'
import c from './RightCount.module.css'

let RightCount =()=>{
    return(
        <div className={c.rightCount} >

             <div href={'#'} className={c.item}>
                 <a href="#">
                     <div className={c.count}>159</div>
                     <div className={c.itemCount}>друзей</div>
                 </a>
             </div>

             <div href={'#'} className={c.item}>
                 <a href="">
                     <div className={c.count}><span>3</span></div>
                     <div className={c.itemCount}>видео</div>
                 </a>
             </div>


             <div href={'#'} className={c.item}>
                 <a href="">
                     <div className={c.count}><span>7</span></div>
                     <div className={c.itemCount}>фото</div>
                 </a>
             </div>

            <div href={'#'} className={c.item}>
                <a href="">
                    <div className={c.count}><span>4</span></div>
                    <div className={c.itemCount}>подписчика</div>
                </a>
            </div>

        </div>
    )
}

export default RightCount