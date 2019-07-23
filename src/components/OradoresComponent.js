import React from 'react';
import fot1 from '../assets/img/speaker1.jpg'
import fot2 from '../assets/img/speaker2.jpg'
import fot3 from '../assets/img/speaker3.jpg'

class Oradores extends React.Component{
    render(){
    return  (
        <section id="speakers" class="mt-4 mb-4">
        <div class="container">
            <div class="row">
                <div class="col text-center text-uppercase">
                    <small>Conoce a los</small>
                    <h2>Oradores</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card" >
                        <img src={fot1} class="card-img-top" alt="Foto de Catalina"/>
                        <div class="card-body">
                            <div class="badges mb-2">
                                <span class="badge badge-warning">HTML</span>
                                <span class="badge badge-info">HTML 5</span>
                            </div>
                            <h5 class="card-title mb-0 ">Narayana Salamanca</h5>
                            <p class="card-text">Actualizaciones de HTML en su versión 5 y buenas prácticas de estructura</p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card" >
                        <img src={fot2} class="card-img-top" alt="Foto de Catalina"/>
                        <div class="card-body">
                            <div class="badges mb-2">
                                    <span class="badge badge-warning">CSS</span>
                                    <span class="badge badge-info">SASS</span>
                            </div>
                            <h5 class="card-title mb-0">Ana Restrepo</h5>
                            <p class="card-text">Colocando estilos y dando forma a nuestras páginas web haciendo uso de CSS </p> 
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card" >
                        <img src={fot3} class="card-img-top" alt="Foto de Catalina"/>
                        <div class="card-body">
                            <div class="badges mb-2">
                                    <span class="badge badge-warning">JavaScript</span>
                                    <span class="badge badge-info">ECS6</span>
                                </div>
                            <h5 class="card-title mb-0">Catalina Escobar</h5>
                            <p class="card-text">Como usar JavaScript con sus mejoras a nivel de asincronismo, promesas y callbacks</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
}
}

export default Oradores;