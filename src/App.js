import './App.css';
import Presentation from './Presentation';
import Biography from './Biography';
import History from './History';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Presentation />
      </header>
      <header className="App-header">
        <Biography />
      </header>
      <header className="App-header" style={{color: 'black'}}>
        <History />
      </header>
    </div>
  );
}

export default App;
