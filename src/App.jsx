
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Blog from "./components/Blog";
import Wishlist from "./components/Wishlist";
function App() {
  return ( 
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
      </Routes>
    </Router>
    
    </>
   );
}

export default App;