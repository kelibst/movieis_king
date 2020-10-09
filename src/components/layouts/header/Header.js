import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import HeaderCourosel from '../HeaderCourosel'
import './Header.scss'
import NavBar from './NavBar'
const Header = () => {
    return (
        <BrowserRouter>
        <div className="header-container">
            <NavBar />
            <HeaderCourosel />
        </div>
        </BrowserRouter>
    )
}

export default Header