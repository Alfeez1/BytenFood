import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
