import React from 'react';
import fondoMain1 from '../assets/img/fondoMain1.jpg'
import fondoMain2 from '../assets/img/fondoMain2.jpg'
import fondoMain3 from '../assets/img/fondoMain3.jpg'
import fondoMain4 from '../assets/img/fondoMain4.jpg'


class Main extends React.Component{
    render(){
    return  (
        <main id="main">
        <div className="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div className="carousel-inner">
            <div className="carousel-item">
                    <img src={fondoMain1} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item active">
                    <img src={fondoMain4} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item">
                    <img src={fondoMain2} className="d-block w-100" alt="fondo"/>
                </div>
                <div className="carousel-item">
                    <img src={fondoMain3} className="d-block w-100" alt="fondo"/>
                </div>
              
                <div className="overlay">
<div className="container">
    <div className="row" id='contInfoMain'>
        <div className="col-md-6">
        <h1 id='nombre'>Kevin Daniel Pineda</h1> 
            <p id='rol'>Programador Front_End
            </p>
            <a href="#" className="btn btn-outline-light" id='btn-contac'>Conctactos</a>
            <button type="button" className="btn btn-geek" data-toggle="modal" data-target="#modalCompra">Enviame un Mensaje</button>
        </div>
    </div>
</div>
</div>
            </div>
        </div>
    </main>

    );
}
}

export default Main;