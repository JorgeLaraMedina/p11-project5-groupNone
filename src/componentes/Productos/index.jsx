import React from 'react'
import portada from "../../assets/img/portada.png";
import Lista from "../../assets/img/Lista.png";
import List from "../../assets/img/List.png";
import Section from "../../assets/img/Section.png";
import Footer from "../../assets/img/Footer.png";

export const ProductosLista = () => {
    return (

        <header>
            <div>
                <img class="portada" src={portada}/>
            </div>
            <div>
                <h2>Top ventas del momento</h2>
                <img class="Lista" src={Lista} />
            </div>
            <div>
                <h2>Colecciones destacadas</h2>
                <img class="List" src={List} />
            </div>
            <div>
                <img class="Section" src={Section} />
            </div>
            <div>
                <img class="Footer" src= {Footer}/>
            </div>
        </header>


    )
}
