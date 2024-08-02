import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <ul className='flex flex-row justify-between gap-6'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>

                <li>
                    <NavLink to="/skills">Skills</NavLink>
                </li>
            </ul>
        </div>
    )
}
