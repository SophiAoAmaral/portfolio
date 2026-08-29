import { Routes, Route } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Projeto } from "./Components/Projeto"
import { Cards } from "./Components/Cards"

function App() {
  

  return (
    <>
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/projeto/:id" element ={<Projeto/>}/>
      </Routes>


      <Footer/>
    </>
  )
}

export default App
