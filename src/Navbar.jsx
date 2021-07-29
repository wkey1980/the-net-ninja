import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>Navbar Menu</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
