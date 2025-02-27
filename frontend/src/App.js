
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = '/home' element = {<Home/>} />
          <Route path = '/cart' element = {<Cart/>} />
          <Route path = '/login' element = {<LoginSignup/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
