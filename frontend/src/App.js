
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_womens.png';
import kids_banner from './Components/Assets/banner_kids.png';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="Mens"/>} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="Womens"/>} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="Kids"/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
