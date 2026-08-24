import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import ProjectDetail from './pages/ProjectDetail/index.jsx'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <footer />
    </Router>
  );
}

export default App;