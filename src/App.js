
import './App.css';
import Navbar from './component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './pages/shop';
import Shopcategory from './pages/shopcategory';
import Footer from './component/Footer/Footer';
import men_banner from './component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kid_banner from './component/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<product/>}>
          <Route path=':productId' element={<product/>}/>
        </Route>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/login' element={<loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
