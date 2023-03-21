import {BrowserRouter , Routes,Route} from "react-router-dom"
import Nav from "../src/components/Nav"
import Users from "../src/components/Users"
import Home from "../src/components/Home"
import Details from "../src/components/Details"
function App() {
  return (
    
    <BrowserRouter>
    
    <Nav/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/users" element={<Users/>}/>
    <Route path="/details" element={<Details/>}/>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App;
