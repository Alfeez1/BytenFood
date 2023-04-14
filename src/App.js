import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/Homepage';
import Menu from './Components/Menu/Menu';
import Listing from './Components/Menu/MenuListing/Listing';
import FoodList from './Components/Menu/FoodList/FoodList';
import Filter from './Components/Menu/FoodList/FilterFood';

import FoodDetails from './Components/Menu/FoodDetail/FoodDetails';
import CartListingPage from './Components/Cart/CartPage';
import OrderSuccess from './Components/Cart/Orders/OrderSuccess';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/list" element={<Listing />} />{' '}
          <Route path="/foodlist" element={<FoodList />} />
          <Route path="/fooddetails" element={<FoodDetails />} />{' '}
          <Route path="/cartlist" element={<CartListingPage />} />
          <Route path="/ordersuccess" element={<OrderSuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
