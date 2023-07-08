// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mens from './components/Mens';
import Footer from './components/Footer';
import Kids from './components/Kids';
import Women from './components/Women';
import Homeliving from './components/Home&living';
import Beauty from './components/Beauty';
import Home from './components/Home';



function App() {
  return (
    <div >
      
     
      <BrowserRouter>
<Navbar/>



      <Routes>
        
        <Route element={<Mens/>} path="mens"/>
        <Route element={<Home/>} path="/"/>
        <Route element={<Kids/>} path="kids"/>
        <Route element={<Women/>} path="womens"/>
        <Route element={<Homeliving/>} path="home & living"/>
        <Route element={<Homeliving/>} path="home & living"/>
        <Route element={<Beauty/>} path="beauty"/>
     
        
    
      </Routes>
      <Footer/>
      
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
