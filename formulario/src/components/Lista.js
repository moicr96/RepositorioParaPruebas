import { Component } from "react";
import "../css/listastyles.css"
class Lista extends Component{
    render(){
        return(
            <main>
                <label htmlFor="myBrowser"> 
                {this.props.defaultTitle}
                </label>
                <input className="datalista" type="text" id="myBrowser" list="browsers"/>
                <datalist id="browsers">
                    <option value="Chrome"></option>
                    <option value="Edge"></option>
                    <option value="Opera"></option>
                    <option value="Mozila"></option>
                    <option value="Brave"></option>
                    <option value="Safari"></option>
                </datalist>
            </main>
        );
    }//render
}//class Lista
export default Lista