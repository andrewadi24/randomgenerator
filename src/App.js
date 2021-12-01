import logo from './logo.svg';
import './App.css';
import Settings from './components/Settings.js'
import Output from './components/Output.js'
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js'
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div class="container">
      <Output></Output>
      <Settings></Settings>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
