import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

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
                    {/* <p className="nav_buttons">Stoicism</p>
                        
                        <p className="nav_buttons">Epicureanism</p>
                        <p className="nav_buttons">Platonism</p>
                        <p className="nav_buttons">Aristotelianism</p>
                        <p className="nav_buttons">Скептицизм</p> */}
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to={'/Platonism'}>Platonism</Link>
                    <Link className='link' to={"/Skepticism" }>Skepticism</Link>
                    <Link className='link' to={"/Stoicism"}>Stoicism</Link>
                    <Link className='link' to={"/Epicureanism" }>Epicureanism</Link>
                    <Link className='link'to={"/Aristotelianism" }>Aristotelianism</Link>

                </div>
            </header>
        </div>
    )
}

export default Header