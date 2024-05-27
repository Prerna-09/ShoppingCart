
import "./styles/app.scss"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./Components/Header"
import {Toaster} from "react-hot-toast"
import Cart from "./Components/Cart"


function App() {



  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route  path="/"   element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Toaster/>
    </Router>
      
     
    </>
  )
}

export default App
