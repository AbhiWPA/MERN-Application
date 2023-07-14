import { Route, Routes } from 'react-router-dom';
import Header from './Header'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Items from '../../pages/Items'
import Contact from '../../pages/Contact'
import PlaceOrder from '../../pages/PlaceOrder'

const Layout = () => {
  return (
    <>
       <Header /> 

  <main>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/items' element={<Items/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/placeOrder' element={<PlaceOrder/>}/>
  </Routes> 
  </main>
    </>
  );
};
export default Layout;