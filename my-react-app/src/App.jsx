import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // Import the Home component from the pages folder

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Render the Home component at the root path */}
      </Routes>
    </Router>
  );
}

export default App;