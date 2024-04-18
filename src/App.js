import "./App.css";
import Home from "./Components/Home";
// import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Diagnostics from './Components/Diagnostics'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hypertension from "./Components/Hypertension";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/infection" element={<Diagnostics/>}/>
          <Route path="/hypertension" element={<Hypertension/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
