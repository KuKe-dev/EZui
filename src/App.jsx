import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";
import './App.css'

import Home from './pages/others/Home'
import About from './pages/others/About'

export default function App() {

  return (
    <>
    <h1 className="font-title">Tittle</h1>
    <p className="font-text">Parrafo donde digo cosas</p>
    <div>Parra</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};