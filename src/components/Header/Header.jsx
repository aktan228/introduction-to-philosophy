import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header_container container'>
            <header className="header">
                <div className="header_logo_father">
                    <div className="header_logo_father">
                        <div className="header_logo"></div>
                        <div className="header_title greece">Orpheus</div>
                    </div>
                </div>
                <div className="nav">
                        <p className="nav_buttons">Stoicism</p>
                        <p className="nav_buttons">Epicureanism</p>
                        <p className="nav_buttons">Platonism</p>
                        <p className="nav_buttons">Aristotelianism</p>
                        <p className="nav_buttons">Aophism</p>
                </div>
            </header>
        </div>
    )
}

export default Header