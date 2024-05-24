import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/todolist">TodoList</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/counter">Counter</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/countries">Countries</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/posts">Posts</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" to="/addPost">Add Newpost</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}
export default Header