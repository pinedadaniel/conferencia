import React from 'react';
import iconD from '../assets/img/iconDiamond.png'
import danyels from '../assets/img/marca.png'


class Header extends React.Component{
    render(){
    return  (
        <nav id="header" className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container" id='contenedorNav'>
        <div className='marca'> 
        <a className="navbar-brand" href="#">
         <div className='contMarca'>    
        <img src={iconD} id='iconDiamond' alt="IconMarca"/> <img src={danyels} id='iconDanyels' />
        </div>
            </a>
    
            </div>
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#main">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#main">Sobre Mi</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Experiencia</a>
                </li>
                <li className="nav-item">
                        <a className="nav-link" href="#"> portafolio </a>
                </li>
                
                <li className="nav-item">
                        <a className="nav-link text-ac-geek" href="#" data-toggle="modal" data-target="#modalCompra">Contactame</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>

    );
}
}

export default Header;