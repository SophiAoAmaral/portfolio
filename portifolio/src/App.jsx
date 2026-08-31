import { Routes, Route, useLocation } from "react-router-dom"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Home } from "./Components/Home"
import { Projeto } from "./Pages/Projeto"
import { Cards } from "./Components/Cards"
import { Projetos } from "./Pages/Projetos"
import { useEffect } from "react"

function App() {
  function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


  return (
    <>
    <ScrollToTop/>
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
