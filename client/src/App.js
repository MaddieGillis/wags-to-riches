import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Pages/home';
import Login from './Pages/Login';
import Donate from './Pages/donate';
import Favedogs from './Pages/favedogs';
import Signup from './Pages/Signup';


function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route path='/favedogs' element={<Favedogs/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/donate' element={<Donate/>} />
    </Routes>
    </Router>
);
}
  
export default App;













