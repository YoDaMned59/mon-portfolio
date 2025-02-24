import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;