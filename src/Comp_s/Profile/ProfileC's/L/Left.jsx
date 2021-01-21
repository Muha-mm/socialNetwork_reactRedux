import React from 'react'
import c from './Left.module.css'
import Sticky from 'react-stickynode';
import Ava from "./Ava/Ava";
import Friends from "./Friends/Friends";
const Left = () =>{
    return (
    <div className={c.left}>
        <Ava/>
        {/*<Sticky top={60}>*/}
            <Friends/>
        {/*</Sticky>*/}
    </div>
)}
export default Left