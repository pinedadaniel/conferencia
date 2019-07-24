import React from 'react';
import Header from './HeaderComponent'
import Main from './MainComponent'
import Oradores from './OradoresComponent'
import Location from './LocationComponent'
import Contac from './ContacComponent'
import Footer from './FooterComponent'
import Modal from './ModalComponent';

class Web extends React.Component{

    render(){
return (
  <div className='Web'> 
    
     <Header/>
     <Main/>
     <Oradores/>
     <Location/>
     <Contac/>
     <Footer/>
     <Modal/>
  
    
  </div>

    
       );

    }

}

export default Web;