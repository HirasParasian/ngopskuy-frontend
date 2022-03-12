
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Test from './pages/Test'
import Login from './pages/Login'
import React from 'react'
import Footer from './components/Footer';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/test' element={<Test />} />
        <Route path='/login' element={<Login />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;
