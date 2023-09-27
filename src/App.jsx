import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
function App() {


  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route exact path ="/" element={<Home/>} />
    </Routes>
    <Footer/>
    </>
    </BrowserRouter>
      
  )
}

export default App
