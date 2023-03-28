import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Navbar() {
    return (
            <header>

                <nav>

                    <ul>
                        <li>
                            <Link to='/'> Home</Link>
                        </li>
                        <li>
                            <Link to='/portfolio'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='/contato'>Contato</Link>
                        </li>
                    </ul>

                </nav>

            </header>
    );
}

export default Navbar;