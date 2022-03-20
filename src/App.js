import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Persone from './components/Persone/Persone';

function App() {
  return (
    <div className="App">
      <Device name='u phone' price='$ 3000'></Device>
      <Persone camara="30px"></Persone>
    </div>
  );
}

export default App;
