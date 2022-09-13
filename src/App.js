import './App.css';
// components
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Switch } from 'react-router-dom'
// pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  const URL = "https://duitsman-portfolio.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;