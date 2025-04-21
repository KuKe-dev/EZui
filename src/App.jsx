import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";
import './App.css'

import Home from './pages/others/Home'
import About from './pages/others/About'
import ComponentView from "./pages/componentsViews/ComponentView";
import Button from "./pages/componentsViews/components/Button";



export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/component1" element={ < ComponentView component={ <Button/> } /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
};