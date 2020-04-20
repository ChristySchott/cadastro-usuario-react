import './Nav.css'
import React from 'react'
import NavItem from './Nav-item'

export default props =>
        <aside className="menu-area">
        <nav className="menu">
        <NavItem routes="/" icon="home" nome="Inicio"/>
        <NavItem routes="/users" icon="users" nome="Usuários"/>
        </nav>
        </aside>