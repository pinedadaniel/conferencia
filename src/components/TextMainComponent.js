import React from 'react';


class TextMain extends React.Component{
    render(){
    return  (
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

    );
}
}

export default TextMain;