import logo from './logo.svg';
import './App.css';
import Etiqueta from './components/Etiqueta';
import Productos from './components/Productos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Etiqueta></Etiqueta>
        <Productos/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
