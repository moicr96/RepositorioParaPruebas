import React,{ Component } from "react";

class Productos extends Component{
    productos = [
        {
        nombre: "Cuaderno profesional / Cubiertas estándar / Espiral doble", 
        descripcion: "Cuaderno Profesional Norma 580814 / Cuadro chico / 100 hojas",
        precio : 57,
        url_imagen : "producto_1.gif"
        },
        {
          nombre: "Cuaderno Profesional Norma Color 360 / Cuadro grande / 100 hojas", 
          descripcion: "Cuaderno profesional de uso escolar / Encuadernado cosido Duralink / Lomo reforzado / Diseño de color 360° / Cubiertas de pasta gruesa (plastificado Duracover) / Stickers Norma Color / Insertos didácticos / Márgenes rojos",
          precio : 83,
          url_imagen : "producto_4.jpg"
        },
        {
          nombre: "Cuaderno Profesional Norma Unicampus Lines / Cuadro grande / 160 hojas", 
          descripcion: "Cuaderno profesional / Cubiertas resistentes / Doble espiral metálica / Para uso universitario o profesional",
          precio : 299,
          url_imagen : "producto_3.jpg"
        }
      ];
    render(){
        return(
            <ol>                
                    {this.productos.map(function (p){
                        return(<li>{p.nombre}</li>);
                    })
                    }                
            </ol>
        );
    }//render
}//class Productos

export default Productos;