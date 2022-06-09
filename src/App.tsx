import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Animals from './components/Animals';

const App = () => (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Animals />} />
      </Routes>
    </Router>
  </div>
);

export default App;
