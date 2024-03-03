import React from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Hero from "./Components/Dashboard/Hero";
import Navbar from "./Components/Dashboard/Navbar";
import  Headcared from "./Components/Dashboard/Headcared"
import Food from "./Components/Dashboard/Food";
import Showroom from "./Components/Dashboard/Showroom"
function App() {

  return (
    <BrowserRouter>
    
      <Routes>
      <Route
          path="/"
          element={
            <>
              <Navbar />
           <Hero />
             <Headcared />
             <Food/>
<Showroom />
            </>
          }
        />
         
         </Routes>
    </BrowserRouter>
  );
}

export default App;

