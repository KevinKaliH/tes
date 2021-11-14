import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <header>
            <nav className="nav navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/job' className="nav-link">Jobs</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
