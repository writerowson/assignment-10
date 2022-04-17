
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Login from './Pages/LogIn/Login';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NotFounded from './NotFound/NotFounded';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/Services/CheckOut/CheckOut';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/checkout' element={<CheckOut></CheckOut>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFounded></NotFounded>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;


