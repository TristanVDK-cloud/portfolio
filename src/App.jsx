import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index.jsx';
import Home from './pages/Home/index.jsx';
import Footer from './components/Footer/index.jsx'

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;