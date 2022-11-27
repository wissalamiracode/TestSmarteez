import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Count from './Components/Count';
function App() {
  return (
    <div className="App">
      <Router>
        <Count/>
      </Router>
    </div>
  
  );
}

export default App;
