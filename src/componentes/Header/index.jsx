import React from 'react'
import logo from "../../assets/img/logo.png";


export const Header = () => {
    return (

        <nav>

            <div>
                <img class="logo" src={logo} width="160" height="40"/>
            </div>
            <div class="container">
                <input type="text" placeholder="Busca producto, deporte..." />
          </div>
          <div>
             <ul>
                <li>
                    <a href="#">Deportes</a>
                </li>
                <li>
                    <a href="#">Hombre</a>
                </li>
                <li>
                    <a href="#">Mujer</a>
                </li>
                <li>
                    <a href="#">Infantil</a>
                </li>
                <li>
                    <a href="#">Equipamiento</a>
                </li>
                <li>
                    <a href="#">Nutrición y salud</a>
                </li>
                <li>
                    <a href="#">Descuentos</a>
                </li>
            </ul>
            </div>
        </nav>

    )
}
