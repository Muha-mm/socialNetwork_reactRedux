import React from 'react'
import c from './SearchUser.module.css'
const SearchUser = (props) =>{
    return (
    <div className={c.searchUser}>
        <div className={c.search}>
            <input
                value={props.newSearchUserText}
                onChange={()=>{}}
                type="text"
                placeholder={'Enter to find user'}
                autoFocus
            />
        </div>
    </div>
)}
export default SearchUser