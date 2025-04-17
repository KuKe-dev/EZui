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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};