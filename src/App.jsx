import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Navbar from "./components/Navbar";

 
function App() {
 

  return (
    <>
    <BrowserRouter>
   <Navbar/>
    <Routes>
      
    
      <Route path="/" element={
       <Create/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
