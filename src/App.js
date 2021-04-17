import Main from './Components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
