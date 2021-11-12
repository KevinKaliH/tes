import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/job'>Jobs</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
