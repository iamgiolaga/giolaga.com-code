import me from './me.png';
import workInProgress from './workInProgress.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="presentationContainer">
          <p id="hello">Hi! I am Giovanni :)</p>
          <img id="profilePic" src={me} alt="Profile"/>
          <div style={{marginTop:"50px"}}>
            <img src={workInProgress} alt="WorkInProgress" width="70px" height="70px"></img>
            <div>My personal website is coming soon!</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
