
import './App.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Routs from './routs/routs'


import AOS from 'aos';
import { useEffect } from 'react';




function App() {



useEffect(()=>{
  AOS.init()
},[]);



  return (
  <div className="flex flex-col overflow-x-hidden">
    <Header />
    <Routs />
    <Footer/>
  </div>
  )
}

export default App
