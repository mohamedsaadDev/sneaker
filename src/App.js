import './App.css';
import React,{useState} from 'react'; 
import Header from './components/header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Man from './pages/Man/Man';
import Footer from './components/footer/footer';
import Women from './pages/Women/Women';
import Abut from './pages/Abut/Abut';
import Register from './pages/Register/Register';
function App() {
  const [quantitycart,setquantitycart]=useState(0)
  const [quantity, setquantity]=useState(0)
  return(
    <BrowserRouter>
      <Header
      quantitycart={quantitycart}
      setquantitycart={setquantitycart}
      />
      <Routes>
        <Route path="/" element={<Home 
        quantity={quantity} 
        setquantity={setquantity}
        setquantitycart={setquantitycart}
        />} />
        <Route path='/man' element={<Man />}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/abut' element={<Abut/>}/>
        <Route path='/contactus' element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
