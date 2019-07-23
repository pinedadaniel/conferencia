import React from 'react';
import med1 from '../assets/img/medellin1.png'
import med2 from '../assets/img/medellin2.png'
import med3 from '../assets/img/medellin3.png'

class Main extends React.Component{
    render(){
    return  (
        <main id="main">
        <div class="carousel" class="carousel slide carousel-fade" data-ride="carousel" data-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={med1} class="d-block w-100" alt="Medellin 1"/>
                </div>
                <div class="carousel-item">
                    <img src={med2} class="d-block w-100" alt="Medellin 2"/>
                </div>
                <div class="carousel-item">
                    <img src={med3} class="d-block w-100" alt="Medellin 3"/>
                </div>
                <div class="overlay">
<div class="container">
    <div class="row align-items-center">
        <div class="col-md-6 offset-md-6 text-center text-md-right">
            <h1>Geek Conf Medellín</h1>
            <p class="d-none d-md-block">Geek conf realiza su primer Demo Day con la cohorte de 
                Línea 1: FrontEnd, donde los Geeks entrenados evidencian
                por medio de un proyecto todas las habilidades y conocimientos
                técnicos adquiridos durante el curso.
            </p>
            <a href="#" class="btn btn-outline-light">Quiero ser orador</a>
            <button type="button" class="btn btn-geek" data-toggle="modal" data-target="#modalCompra">Comprar Tickets</button>
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