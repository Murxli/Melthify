import { BrowserRouter } from "react-router-dom";

import './App.css'


import Navbar from './components/Navigation/Navbar';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Landing />
      </div>
    </BrowserRouter>
    
  )
}

export default App;
