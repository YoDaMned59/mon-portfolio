import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </Router>
  );
}

export default App;