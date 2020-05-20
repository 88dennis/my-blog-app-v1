import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <div className="ui inverted segment">
                <div className="ui inverted secondary menu customCenter">
                    <Link to="/" className="active item">
                        Home
                    </Link>
                    {/* <div className="spacer"></div> */}
                    <Link to="/about" className="active item">
                        About
                    </Link>
                    {/* <div className="spacer"></div> */}
                    <Link to="/articles-list"className="active item">
                        Articles
                    </Link>

                    {/* <Link to="/"className="active item">
                        Settings
                    </Link> */}
                    </div>
                    </div>
        </>
    )
}

export default NavBar
