import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#" style={{ color: 'white' }}></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">

                        <Link to='/' class="nav-link" style={{ color: 'white' }} href="#">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to='/main' style={{ color: 'white' }}>Main Page</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar