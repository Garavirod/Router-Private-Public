import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const Navbar = () => {
    // using context
    const {user, dispatch} = useContext(AuthContext);
    // Router dom is a privider, and we can use its props
    // its props are the history.
    const history = useHistory();

    const handleInput = () => {
        dispatch({
            type:types.logout
        });
        history.replace("/login");
    }

    
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search-hero"
                    >
                        Search heroe
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
    <span className="nav-item nav-link text-info">{user.name}</span>
                    <button                         
                        className="nav-item nav-link btn"
                        onClick={handleInput}                                                 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
