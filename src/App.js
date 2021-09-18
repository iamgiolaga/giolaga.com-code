import me from './me.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="presentationContainer">
          <p id="hello">Hi! I am Giovanni :)</p>
          <img id="profilePic" src={me} alt="Profile"/>
        </div>
      </header>
    </div>
  );
}

export default App;
