import React, {Component} from "react";
import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

class Etiqueta extends Component{
    render(){
        return (
            <div>
            <Alert key="dark" variant="dark">
                Etiqueta de alerta de bootstrap para react
            </Alert>
            <h1>Componente 1.1</h1>
            <h2>Componente 1.2</h2>
            <h3>Componente 1.3</h3>
            </div>


            
        );
    }//render
}//class Etiqueta

export default Etiqueta;