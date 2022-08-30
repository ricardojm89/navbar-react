import React from "react";
import logo from "./Imagenes/Burger-King-Logo-CMS.png"

const Navbar = () => {
    return (
        <div className="container">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"> <img src={logo} width="48" alt="Burger" /></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" >Pedi te combo favorito</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Menu</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Cupones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Restaurantes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Noverdades</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link link_header" href="#">Delivery</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;