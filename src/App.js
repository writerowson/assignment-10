
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import Services from './Pages/Services/Services';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Login from './Pages/LogIn/Login';
import Header from './Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>


      </Routes>
    </div>
  );
}

export default App;
