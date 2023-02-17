import { useState } from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
 import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/Header/header'
import Company from './pages/Company'
import Home from './pages/Home'
 
function App() {
 
  return (
    <div className="App"> 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/company/:id' element={ <Company /> } />
      </Routes>
      <Footer />
    </BrowserRouter>       
      
     
     
    </div>
  )
}

export default App
