import React from 'react'
import c from './Header.module.css'
const Header = () =>{
    return (
        <header className={c.head}>
            <div className={c.zag}>
                Header      Header   header Header    Header     Header
                Header header   Header    header Header   header
                Header   header       Header header  Header    Header
                Header      header   Header  Header    header  Header header
            </div>
        </header>
    );
}
export default Header