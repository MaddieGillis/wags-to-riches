import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './/Pages';
import About from './Pages/about';
import Login from './Pages/Login';
import Donate from './Pages/donate';
import Favedogs from './Pages/favedogs';
import Signup from './Pages/Signup';


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/favedogs' element={<Favedogs/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/donate' element={<Donate/>} />
    </Routes>
    </Router>
);
}
  
export default App;













