import './App.css';
import { Choose } from './components/choose';
import { Login } from './components/login';
import { Register } from './components/register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Register /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/plans" element={ <Choose /> } />
      </Routes>
    </Router>
  );
}

export default App;
