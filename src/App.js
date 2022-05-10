
import './App.css';
import Home from './pages/Home'
import SearchPage from './pages/SearchPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        {/* Search page(result page) */}
          <Route path="/search" element={<SearchPage/>} />
        {/* Home(the one with the search one) */}
          <Route exact  path="/" element={<Home />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
