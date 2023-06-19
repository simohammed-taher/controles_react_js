import React from 'react'
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/ListPosts'>listPost</Link></li>
                <li><Link to='/PostParId/1'>PostParId</Link></li>
            </ul>
        </div>
    )
}
