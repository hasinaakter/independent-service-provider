import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Services from './component/Services/Services';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route  path='/'>Home</Route>
        <Route  path='/home' element={<Home></Home>}>Home</Route>
        <Route  path='/services' element={<Services></Services>}>Services</Route>
        <Route  path='/about'element={<About></About>}>About</Route>
        <Route  path='/blogs'element={<Blogs></Blogs>}>Blogs</Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

      </Routes>
    </div>
  );
}

export default App;
