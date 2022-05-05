import Home from "./views/home";
import "./App.css";
import ItemMangement from "./views/itemMangement";
import { BrowserRouter, Link, Route, Router, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/mybillbook" element={<ItemMangement/>}/>
     </Routes>
    </BrowserRouter>
    
    // <div className="App">
    // <Home/>
    //  {/* <ItemMangement/> */}
    // </div>
  );
}

export default App;
