import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Menu from './Components/Menu/Menu';
import Listing from './Components/Menu/MenuListing/Listing';
import FoodList from './Components/Menu/FoodList/FoodList';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/list" element={<Listing />} />{' '}
          <Route path="/list" element={<Listing />} />
          <Route path="/foodlist" element={<FoodList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
