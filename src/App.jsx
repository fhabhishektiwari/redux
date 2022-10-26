import React from 'react'
import './App.css'

import Login from './pages/Auth/Login'

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <Routes>
    <Route path='/' exact element={<Login/>}/>
    <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
