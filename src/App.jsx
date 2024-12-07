import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="App">
            <Navbar/>
            <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/contacto" element={<Contact />}/>
              <Route path="/dentist/:id" element={<Detail />}/>
              <Route path="/favs" element={<Favs />}/>
            </Routes>
            <Footer/>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
