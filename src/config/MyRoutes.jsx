import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'
import Home from '../components/pages/Home'
import ProductDetail from '../components/pages/ProductDetail'

const MyRoutes = () => {
  return (
   <Routes>
     <Route path='/'element = {<Home/>}/>
     <Route path='/about'element = {<About/>}/>
     <Route path='/contact'element = {<Contact/>}/>
     <Route path='/detail/:id'element = {<ProductDetail/>}/>
   </Routes>
  )
}

export default MyRoutes