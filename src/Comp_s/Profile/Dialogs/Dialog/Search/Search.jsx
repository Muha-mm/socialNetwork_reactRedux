import React from 'react'
import c from './Search.module.css'
const Search = () =>{
    return(
        <div className={c.search}>
            <input type="text" placeholder={'поиск'}/>
            <hr/>
        </div>
    )
}
export default Search