import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <img src="/logo.png" alt="logo" />
                        <h1>Que te Vendo</h1>
                    </div>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/tienda">Tienda</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}