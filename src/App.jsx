
import './App.css'
import Header from './ui/Header'
import Footer from './ui/Footer'
import Routs from './routs/routs'

function App() {


  return (
  <div className="flex flex-col overflow-x-hidden">
    <Header />
    <Routs />
    <Footer/>
  </div>
  )
}

export default App
