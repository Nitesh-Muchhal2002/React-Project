import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Foter/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout