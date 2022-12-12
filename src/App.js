import './App.css';
import Drawer from './components/Drawer';


const toggleDrawer = () => {
  const drawer = document.querySelector('.drawer');
  if(drawer.classList.contains('visible')) {
    drawer.classList.remove('visible');
  } else {
    drawer.classList.add('visible');
  }
}

function App() {
  return (
    <div className="App">
      <button className="drawer-btn"
              onClick={() => toggleDrawer()}
      >
        Toggle Drawer
      </button>
      <header className="App-header">
        <div className="container">
        <Drawer/>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
