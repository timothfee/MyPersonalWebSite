import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "../src/pages/Home"
import Pwnagotchi from "./pages/Pwnagotchi";



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home />}/>
      <Route index element={<Pwnagotchi/>}/>
      <Route path="/pwnagotchi" element={<Pwnagotchi/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
