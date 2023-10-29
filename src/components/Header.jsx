import React from "react";

export default function Header() {
    return (
        <header>
            <div className="container">
                <a href="#" className="logo-name">
                    <div className="logo">
                        <img src="/logo.png" alt="logo" />
                        <h1>Que te Vendo</h1>
                    </div>
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Tienda</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}