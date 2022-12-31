import logo from './logo.svg';
import './App.css';
import {Example} from './componant/header.js';
import {Navbar} from './componant/navbar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Example></Example>
        <Navbar></Navbar>
      </header>
    </div>
  );
}

export default App;
