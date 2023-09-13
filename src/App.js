import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Unisinos - Bruno Righes</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Curriculum</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
