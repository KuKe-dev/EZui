import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import { useState } from "react";
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
          <Route path="/component1" element={<ComponentView 
          component={<Button
            text="Button"
            width={"100px"}
            height="50px"
            backgroundColor={{
              normal: "var(--primary-500)",
              hover: "var(--text-500)",
              active: "var(--primary-500)"}}
            color={{
              normal: "var(--text-500)",
              hover: "var(--primary-500)",
              active: "var(--text-500)"}}
            border="none"
            borderRadius="5px"
          />} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
};