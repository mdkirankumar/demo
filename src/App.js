import React from  "react";
import {
	BrowserRouter, Routes, 
  Route

} from "react-router-dom";
import {HomePages} from "./pages/HomePages";
import{AboutUs} from "./pages/AboutUs";
import { NavBar } from "./components/NavBar";



function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<HomePages/>}/>
    <Route exact path="AboutUs" element={<AboutUs/>}/>
    </Routes>
    </BrowserRouter>
    
      

      );
}

export default App;
