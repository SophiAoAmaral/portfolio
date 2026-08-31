import { Routes, Route } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Projeto } from "./Pages/Projeto"
import { Cards } from "./Components/Cards"
import { Projetos } from "./Pages/Projetos"

function App() {
  

  return (
    <>
      <Header/>
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/projeto/:id" element ={<Projeto/>}/>
        <Route path="/projetos" element={<Projetos/>}/>
      </Routes>


      <Footer/>
    </>
  )
}

export default App
