import "./App.css";
import Contact from "./contacts/contact";
import Home from "./container/home/home";
import Navbar from "./container/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Contact />
    </div>
    // it is updated 
  );
}

export default App;
