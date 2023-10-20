import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Movies from "./pages/Movies";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Movies />
      <Footer/>
    </div>
  );
}

export default App;
