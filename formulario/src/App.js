import logo from './logo.svg';
import './App.css';
import Lista from './components/Lista';

function App() {
  return (
    <div>
      <Lista defaultTitle="Selecciona una opción:"></Lista>
      <br/>
      <Lista defaultTitle="Selecciona otra opción diferente:"></Lista>
    </div>
  );
}

export default App;
