import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from 'react-router-dom';

import './App.css';
import Landing from '@/pages/Landing';
import Articles from '@/pages/Articles';

function App() {
  return (
    // 1. Wrap your entire application content with the Router
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;