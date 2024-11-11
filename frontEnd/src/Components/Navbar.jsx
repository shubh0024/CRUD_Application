import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <Link class="navbar-brand" to="#">COER University</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Get Data</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/create">Create</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/createnew">Create My Own API Data</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/getalldata">GetAll  Data</Link>
                </li>
               
               
    
            </ul>
            
            </div>
        </div>
        </nav>
    );
}

export default Navbar;