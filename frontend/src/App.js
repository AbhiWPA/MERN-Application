//import Layout from './components/Layout/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Items from './pages/Items'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/items' element={<Items/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/placeOrder' element={<PlaceOrder/>}/>
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
