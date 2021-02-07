import React from 'react'
import c from './Footer.module.css'
const Footer = (props) =>{
    return (
        <div className={c.footer}>
            <hr/>
            <div className={c.input}>
                <div className={c.d1}>
                    <form>
                        <textarea
                            onKeyDown={props.handleKeyDown}
                            onChange={props.changeMessageText}
                            value={props.newMessageText}
                            required
                            placeholder="enter message..."/>
                        <button
                            onClick={props.sendMessage}
                            type="button"
                            className={c.add}>
                            {'>'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )}
export default Footer