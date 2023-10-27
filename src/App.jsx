import React from 'react';
import { Header } from './componentes/Header';
import { ProductosLista } from './componentes/productos/index';
import logo from './assets/img/logo.png';
import portada from './assets/img/portada.png';
import Lista from './assets/img/Lista.png';
import List from './assets/img/List.png';
import Section from './assets/img/Section.png';
import Footer from './assets/img/Footer.png';


function App() {
    return (

        <div className="App">
            <Header />
            <ProductosLista />
        </div>

    );
}

export default App;