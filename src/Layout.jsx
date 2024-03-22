import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  const location = useLocation();
  const login = location.pathname === "/login"
  const preg = location.pathname === "/preg"
  const stureg = location.pathname === "/stureg"
  const menreg = location.pathname === "/menreg"
  const dec = !(login || stureg || menreg || preg)
  return (
    <>
      {dec && <Header />}
      <Outlet />
      {dec && <Footer />}
    </>
  )
}

export default Layout
